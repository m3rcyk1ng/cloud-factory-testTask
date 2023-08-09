### Тестовое задание в компанию "Cloud Factory"
#### На позицию Web-разработчика

Сервис по просмотру котировок BTC и USDT в реальном времени с обращением к API Poloniex.

### Инструкция по запуску проекта:

Новое API Poloniex не позволяет получать данные без отключения CORS. 
Необходимо запустить Proxy-server в папке backend.

Вариант 2: воспользоваться расширением "CORS Unblock" для Google Chrome.

Для второго способа в Api.js необходимо раскоментировать второй url, удалить headers в mainApi и
расскоментировать credentials).

Зависимости:
```npm install```

Запуск проекта:

```npm start```

Сборка проекта:
```npm run build```

### Технологии
```sh
React
TypeScript
Styled-components
NPM
Express
```

______________________
V. Gridnev