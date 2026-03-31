---
name: istock-refinements
description: |
  Автоматическая простановка уточняющих ключевых слов (keyword refinements) для iStock
  в интерфейсе MicrostockPlus. Используй этот скилл когда пользователь упоминает:
  уточнения ключевых, keyword refinements, iStock checkboxes, проставить галочки,
  refinement modal, MicrostockPlus модалка уточнений, "проставь", проставить уточнения.
  Также триггерится если пользователь работает на microstock.plus/myfiles и просит
  помочь с метаданными для iStock.
---

# iStock Keyword Refinements — автоматизация через Claude in Chrome

## Что это

iStock требует уточнения (refinements) для ключевых слов. В MicrostockPlus (microstock.plus/myfiles)
есть модальное окно "Уточнения ключевых слов", где для каждого ключевого слова предлагаются
варианты уточнений в виде чекбоксов. Например, для слова "poppy" предлагаются
"Poppy - Plant", "Poppy - Singer", "Oriental Poppy" — нужно выбрать правильные.

Задача: автоматически проставить максимум подходящих чекбоксов, отклоняя только явно
неподходящие (спорт, политика, география, баги, омонимы-люди).

## Процесс работы

### 1. Подготовка — получить tab ID

```javascript
// Сначала вызови tabs_context_mcp чтобы получить tabId
// Убедись что открыта вкладка microstock.plus/myfiles
```

### 2. Определить тему файлов

Пользователь обычно говорит тему: "свадебные приглашения", "цветочные элементы",
"новогодние карточки", "гортензия" и т.д. Это важно для понимания контекста,
но основной метод — фильтрация по reject-листу.

### 3. Открытие модалки и простановка

Когда пользователь говорит "проставь" — модалка уже открыта. Выполняй:

```javascript
const dialog = [...document.querySelectorAll('.dialog-window')]
  .find(d => getComputedStyle(d).display !== 'none'
    && d.querySelectorAll('input[type="checkbox"]').length > 5);

if (!dialog) 'нет модалки — попроси пользователя открыть';
```

### 4. Стратегия простановки — REJECT-лист

Вместо того чтобы выбирать что проставить, проще определить что НЕ проставлять.
Проставляем ВСЁ, кроме явного мусора. Пользователь ожидает максимум галочек.

Загрузи reject-лист из `references/reject-labels.md` и примени:

```javascript
const checkboxes = [...dialog.querySelectorAll('input[type="checkbox"]')];
let checked = 0;
checkboxes.forEach(cb => {
  if (cb.checked) return;
  const lbl = cb.closest('label') || dialog.querySelector(`label[for="${cb.id}"]`);
  const text = lbl ? lbl.textContent.trim() : '';
  if (text && !REJECT_SET.has(text)) { cb.click(); checked++; }
});
```

### 5. Сохранение

После простановки — пользователь сам нажимает "Сохранить" в модалке,
затем "Сохранить" метаданные файла, затем переходит к следующему.

Если пользователь просит автоматический цикл, можно сделать:
- Нажать `dialog.querySelector('input.btn_save')` — сохранить модалку
- Нажать `document.getElementById('save-metadata')` — сохранить метаданные
- Нажать `document.getElementById('toggle-next')` — следующий файл
- Открыть модалку: `document.querySelector('.edit_keyword_terms').click()`

Но автоцикл часто ломается из-за тайм-аутов. Безопаснее работать пошагово:
пользователь открывает модалку → говорит "проставь" → скрипт проставляет.

## Ключевые DOM-селекторы MicrostockPlus

| Элемент | Селектор |
|---------|----------|
| Модалка уточнений | `.dialog-window` с `checkbox` > 5 |
| Сохранить в модалке | `dialog.querySelector('input.btn_save')` |
| Отменить модалку | `dialog.querySelector('input.btn_cancel')` |
| Сохранить метаданные | `#save-metadata` |
| Следующий файл | `#toggle-next` |
| Предыдущий файл | `#toggle-prev` |
| Кнопка уточнений | `.edit_keyword_terms` |
| Поле ключевых слов | `input.edit_keyword_terms` (не доступно пока модалка открыта) |

## Важные нюансы

- **Чекбоксы грузятся через AJAX** — после открытия модалки нужно ждать 3-6 секунд
  или поллить пока количество чекбоксов стабилизируется
- **Ключевые слова не читаются** пока модалка перекрывает форму — определяй
  тему по словам пользователя, а не из DOM
- **Window-функции теряются** при перезагрузке страницы — переинжектируй каждую сессию
- **Пользователь ожидает максимум** — 40-80 галочек на файл нормально, 10-15 мало
- **Reject-лист** лежит в `references/reject-labels.md` — подгружай его в начале работы
