# MicrostockPlus — DOM-селекторы и структура

## Основные селекторы

| Элемент | Селектор | Заметки |
|---------|----------|---------|
| Модалка уточнений | `.dialog-window` visible + checkboxes > 5 | AJAX-загрузка, ждать 3-6 сек |
| Чекбоксы в модалке | `dialog.querySelectorAll('input[type="checkbox"]')` | |
| Лейбл чекбокса | `cb.closest('label')` или `label[for="${cb.id}"]` | |
| Сохранить модалку | `dialog.querySelector('input.btn_save')` | |
| Отменить модалку | `dialog.querySelector('input.btn_cancel')` | |
| Сохранить метаданные | `#save-metadata` | |
| Следующий файл | `#toggle-next` | |
| Предыдущий файл | `#toggle-prev` | |
| Кнопка уточнений | `.edit_keyword_terms` | |
| Активный редактор | `.metadataeditoractive` | |
| Поле ключевых слов | `input.edit_keyword_terms` | НЕ доступно пока модалка открыта |
| Select страны | `select` с опцией "Spain" | Обёрнут в jQuery custom selectbox |

## Обнаружение открытой модалки

```javascript
const getDialog = () => [...document.querySelectorAll('.dialog-window')]
  .find(d => getComputedStyle(d).display !== 'none'
    && d.querySelectorAll('input[type="checkbox"]').length > 5);
```

## Ожидание загрузки чекбоксов

Чекбоксы грузятся через AJAX. Варианты ожидания:

**Простой (фиксированный таймаут):**
```javascript
await new Promise(r => setTimeout(r, 5000));
```

**Polling (надёжнее):**
```javascript
let prev = 0, stable = 0;
for (let i = 0; i < 40; i++) {
  await new Promise(r => setTimeout(r, 400));
  const cnt = dialog.querySelectorAll('input[type="checkbox"]').length;
  if (cnt > 5 && cnt === prev) { stable++; if (stable >= 3) break; }
  else { stable = 0; prev = cnt; }
}
```

## Известные проблемы

- **"Имя новой папки не может быть пустым"** — автоцикл нажал не ту кнопку.
  Решение: использовать только точные селекторы по `id`, не по классу.
- **Критическая ошибка** — сайт не выдержал быстрых автокликов.
  Решение: увеличить паузы между действиями (2+ сек).
- **Ключевые слова не читаются** — пока модалка открыта, `input.edit_keyword_terms`
  перекрыт. Тему определяй от пользователя, не из DOM.
- **async/await в javascript_tool** — нужно оборачивать:
  ```javascript
  (async () => { ... window._result = result; })();
  // потом отдельным вызовом: window._result;
  ```

## Автоцикл (если пользователь просит)

Безопасный автоцикл: открыть модалку → ждать → проставить → сохранить модалку →
сохранить метаданные → следующий файл → повторить.

Строго по `id` и точным селекторам. Паузы 2-3 секунды между шагами.
При ошибке — остановить цикл, сообщить пользователю.
