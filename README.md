# Домашнее задание к занятию «2.8. Вебсокеты в NestJS»
### Правила выполнения домашней работы:

- Выполняйте домашнее задание в отдельной ветке проекта на гитхабе.
- В поле для сдачи работы прикрепите ссылку на ваш проект в Git.
- Присылать на проверку можно каждую задачу по отдельности или все задачи вместе.
- Во время проверки по частям ваша домашняя работа будет со статусом «На доработке».
- Любые вопросы по решению задач можете задавать в чате учебной группы.

## Возьмите решение из домашнего задания «2.8. Протокол WebSocket. Библиотека Socket.IO».
## Выполните задания.

### Задание 1.

Установите пакет @nestjs/websockets.

### Задание 2.

Создайте модуль для работы с комментариями.

1. Создайте модель BookCommentModel.
2. Создайте сервис BookCommentsService для работы с BookCommentModel.
3. Реализуйте CRUD для работы BookCommentModel и метод findAllBookComment(bookId).

Модель BookCommentModel должна хранить:

```
{
id: "number"
bookId: "number"
comment: "string"  
}
```
### Задание 3.

Создайте модуль для работы с комментариями через WebSocket.

1. Создайте класс Gateway.
2. Подключите Gateway к приложению.
3. Подключите BookCommentsService к Gateway.
4. Добавьте обработчик getAllComments, который получает ID книги и возвращает список всех комментариев.
5. Добавьте обработчик addComment, который получает текст комментария и сохраняет его.