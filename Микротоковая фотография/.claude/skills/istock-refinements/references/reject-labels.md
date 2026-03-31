# Reject Labels — метки которые НЕЛЬЗЯ проставлять

Эти метки являются омонимами, багами, или относятся к категориям совершенно не связанным
с визуальным контентом (микросток иллюстрации, фото, вектор). Проставлять нужно ВСЁ
кроме этого списка.

## Принцип

Если метка — омоним к человеку/певцу/персонажу/спортивному термину/географическому
месту, и файлы явно не относятся к этой теме → reject.

## Полный reject-лист

### Омонимы — люди и персонажи
- Poppy - Singer
- Rosé - K-Pop Singer
- Rosé wine
- Rose Colored
- Seth - Egyptian God
- Setter - Athlete
- Eve - Singer
- Eve - Biblical Figure
- Groom - Texas
- Garland - Texas
- Celebration - Florida
- Golden - Colorado
- Golden - British Columbia
- Aloha - Oregon
- Lilibet Mountbatten-Windsor
- Narcissus - Mythological Character
- Sakura - Chiba
- Bamboo - Material (если контент не про бамбук)
- Las Vegas Replica Eiffel Tower
- Replica Eiffel Tower
- France National Team
- Plaid - Electronic Music Duo
- Jungle - Band
- Cracker - Band
- CHIC - Band

### Спорт и соревнования
- Sport Set - Competition Round
- Competition Round
- Setter - Athlete
- Making A Save - Sports

### Неподходящие контексты
- Film Set
- Stage Set
- Film Script
- Sketch Comedy
- Political Party

### Люди / тело / демография
- black people
- white people
- Two Parents
- Body Care
- Grooming - Animal Behavior
- Animal Groomer
- Youth Culture
- Senior Adult
- Senior Animal

### География и инфраструктура
- Remote Location
- Quarantine
- Social Isolation
- Geographical Border
- Construction Frame
- Dividing Line - Road Marking
- Waiting In Line
- Telephone Line
- Green - Golf Course
- Branch - Flowing Water (если не про воду)

### Технические/абстрактные мусорные
- Weather (если файл не про погоду)
- Periodic Table
- The Four Elements
- Video Template Elements
- Cool Attitude
- Blooming Time Lapse (это видео-термин)
- Plan - Document (если не документ)
- Factory (если не фабрика)
- Leaving (омоним к leaf)
- Yard - Grounds
- Vegetable Garden (если не огород)
- Fashion Collection (если не коллекция мод)
- Contour Line (техн. термин)
- Track - Imprint
- Printout
- Printmaking Technique
- Graphic Print
- Single Line (техн.)
- In A Row (техн.)
- Icon Set (если не иконки)
- Group Of Objects (слишком абстрактно)
- Listing - Nautical Activity
- Tie Game
- Natural Condition
- Natural Beauty - People
- Cotton Swab
- Cotton Ball
- Textile Industry (если не про индустрию)
- Loopable Elements (видео-термин)
- Simple Living
- Non-Western Script
- Drawing - Activity (дублирует Drawing - Art Product)
- Fixture Draw
- Spring - Flowing Water (если не про воду)
- Coiled Spring (если не пружина)
- palm of hand (если не про руку)

## Как использовать

```javascript
const REJECT_SET = new Set([
  'Poppy - Singer', 'Rosé - K-Pop Singer', 'Rosé wine', 'Rose Colored',
  'Seth - Egyptian God', 'Setter - Athlete', 'Eve - Singer', 'Eve - Biblical Figure',
  'Groom - Texas', 'Garland - Texas', 'Celebration - Florida',
  'Golden - Colorado', 'Golden - British Columbia', 'Aloha - Oregon',
  'Lilibet Mountbatten-Windsor', 'Narcissus - Mythological Character',
  'Sakura - Chiba', 'Las Vegas Replica Eiffel Tower', 'Replica Eiffel Tower',
  'France National Team', 'Plaid - Electronic Music Duo', 'Jungle - Band',
  'Cracker - Band', 'CHIC - Band',
  'Sport Set - Competition Round', 'Competition Round', 'Making A Save - Sports',
  'Film Set', 'Stage Set', 'Film Script', 'Sketch Comedy', 'Political Party',
  'black people', 'white people', 'Two Parents', 'Body Care',
  'Grooming - Animal Behavior', 'Animal Groomer', 'Youth Culture',
  'Senior Adult', 'Senior Animal',
  'Remote Location', 'Quarantine', 'Social Isolation', 'Geographical Border',
  'Construction Frame', 'Dividing Line - Road Marking',
  'Waiting In Line', 'Telephone Line', 'Green - Golf Course',
  'Branch - Flowing Water',
  'Weather', 'Periodic Table', 'The Four Elements', 'Video Template Elements',
  'Cool Attitude', 'Blooming Time Lapse', 'Plan - Document',
  'Factory', 'Leaving', 'Yard - Grounds', 'Vegetable Garden',
  'Fashion Collection', 'Contour Line', 'Track - Imprint', 'Printout',
  'Printmaking Technique', 'Graphic Print', 'Single Line', 'In A Row',
  'Icon Set', 'Group Of Objects', 'Listing - Nautical Activity', 'Tie Game',
  'Natural Condition', 'Natural Beauty - People',
  'Cotton Swab', 'Cotton Ball', 'Textile Industry', 'Loopable Elements',
  'Simple Living', 'Non-Western Script', 'Drawing - Activity', 'Fixture Draw',
  'Spring - Flowing Water', 'Coiled Spring', 'palm of hand'
]);
```

## Контекстные исключения

Некоторые метки из reject-листа могут быть уместны в специфических контекстах:
- "Branch - Flowing Water" → уместно если файл действительно про реку/ручей
- "Factory" → уместно если файл про промышленность
- "Weather" → уместно если файл про погоду
- "Bamboo - Material" → уместно если файл про бамбук

Пользователь может сказать "этот файл про X" — тогда включай соответствующие метки.
