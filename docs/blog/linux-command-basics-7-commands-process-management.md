---
title: Основы команд Linux - 7 команд для управления процессами 
date: 2020-12-07 11:22:05
cover_index: "http://picsum.photos/450/450?random=42"
tags:
- Linux
- CLI
categories:
- Innovate
- CLI
---

Если вы новичок в Linux и вам нужна помощь в управлении процессами, эти базовые команды для вас.



Предположим, вы впервые изучаете командную строку Linux или входите в систему администрирования Linux. В этом случае очень важно понимать, 
как обходить терминал и выполнять основные задачи. Чтобы помочь вам понять эти концепции, ознакомьтесь с двумя моими предыдущими статьями:

* [10 команд для начала работы с терминалом][4]
* [Еще 10 команд для управления файлами][5]


Однако, если вы чувствуете себя комфортно с этими концепциями, в этой статье мы немного расширим ваши знания о Linux. Мы рассмотрим процессы и способы управления ими.

Итак, что же такое _процесс_ ?

## Дополнительные ресурсы Linux 

* [Шпаргалка по расширенным командам Linux для разработчиков][6]
* [Начните работу с Red Hat Insights][7]
* [Загрузить сейчас: шпаргалка по основным командам Linux][8]
* [Оценка навыков системного администрирования Linux][9]

В Linux процесс - это любой активный (запущенный) экземпляр программы. Но что такое _программа_ ? Что ж, технически программа - это любой исполняемый файл, хранящийся на вашем компьютере. Каждый раз, когда вы запускаете программу, вы создаете процесс. На базовом уровне этим довольно легко управлять, и именно это мы и рассмотрим сегодня.

## Что нужно для начала

Я рекомендую вам следить за своей любимой виртуальной машиной. Таким образом, вы можете попытаться и потерпеть неудачу без каких-либо последствий (что, безусловно, лучший способ освоиться в терминале).

Для этой демонстрации я собираюсь запустить процесс [сна][10] на 500 секунд. Такой подход позволяет вам увидеть процесс, не внося существенных изменений в мою систему.
```
    [tcarrigan@client ~]$ sleep 500
    ^Z
    [1]+  Stopped                 sleep 500
```
Затем я остановил процесс с помощью **Ctrl + Z,** чтобы мы могли использовать наш терминал.

#### 1. Перечислите процессы

Чтобы отобразить текущие активные процессы, используйте psкоманду:
```
    [tcarrigan@client ~]$ ps
        PID TTY          TIME CMD
       2648 pts/0    00:00:00 bash
       3293 pts/0    00:00:00 sleep
       3300 pts/0    00:00:00 ps
```
Здесь вы получите небольшую информацию об активных процессах в вашей системе. Вам нужно обратить внимание на **PID** (уникальный идентификатор процесса), **TIME** (время, в течение которого процесс был запущен) и **CMD** (команда, выполняемая для запуска процесса).

#### 2. Подробный список (процессы)

Чтобы увидеть невероятно подробный список процессов, вы можете использовать ps aux команду.

* а - все пользователи
* u - показывает пользователя / владельца
* x - отображает процессы, которые не выполняются в терминале (что делает вывод довольно длинным)


Вы можете увидеть команду здесь (вывод изменен по длине):
```
    [tcarrigan@client ~]$ ps aux
    USER         PID %CPU %MEM   VSZ    RSS   TTY  STAT  START    TIME   COMMAND
    tcarrig+    3293  0.0  0.0 215292   520 pts/0    T    13:41   0:00 sleep 500
    root        3380  0.0  0.0      0     0 ?        I    13:45   0:00 [kworker/1:1-mm_percpu_wq]
    root        3381  0.0  0.0      0     0 ?        I    13:45   0:00 [kworker/1:3]
    root        3398  0.0  0.0      0     0 ?        I    13:46   0:00 [kworker/3:2-ata_sff]
    root        3481  0.0  0.0      0     0 ?        I    13:50   0:00 [kworker/u8:2-flush-253:0]
    root        3482  0.0  0.0      0     0 ?        I    13:50   0:00 [kworker/0:1-events]
    root        3483  0.0  0.0      0     0 ?        I    13:50   0:00 [kworker/0:2]
    root        3508  0.0  0.0      0     0 ?        I    13:51   0:00 [kworker/3:0-ata_sff]
    root        3511  0.0  0.0  18892  7732 ?        S    13:52   0:00 systemd-userwork
    root        3512  0.0  0.0  18892  7656 ?        S    13:52   0:00 systemd-userwork
    root        3513  0.0  0.0  18892  7656 ?        S    13:52   0:00 systemd-userwork
    root        3566  0.4  0.0 432792  8024 ?        Ssl  13:54   0:00 /usr/libexec/fprintd
    tcarrig+    3598  0.0  0.0 228208  3948 pts/0    R+   13:54   0:00 ps aux
```
#### 3. Убить по PID

Неизбежно процесс зависнет, и вам это понадобится kill. Чем больше времени вы проводите в интерфейсе командной строки, тем больше вероятность, что вам понадобится killкоманда. Самый точный способ идентифицировать процесс - это идентификатор процесса (PID).

Используйте следующий синтаксис:
```
    [tcarrigan@client ~]$ kill PID
```
Эта команда отправляет сигнал **SIGTERM** . Однако, если вы имеете дело с зависшим процессом, добавьте эту -9опцию.
```
    [tcarrigan@client ~]$ ps
        PID TTY          TIME CMD
       2648 pts/0    00:00:00 bash
       3293 pts/0    00:00:00 sleep
       4684 pts/0    00:00:00 sleep
      40527 pts/0    00:00:00 sleep
      40540 pts/0    00:00:00 ps
    [tcarrigan@client ~]$ sudo kill -9 3293
    [sudo] password for tcarrigan: 
    [1]   Killed                  sleep 500
```
#### 4. Убить по имени / ключевому слову

Используйте killallкоманду, чтобы убить процесс по имени. Эта команда уничтожит все процессы с указанным вами ключевым словом / именем.

Синтаксис:
```
    [tcarrigan@client ~]$ killall sleep
```
Это убьет все sleepактивные процессы в системе (этот -9параметр также работает). Вот пример:
```
    [tcarrigan@client ~]$ ps
        PID TTY          TIME CMD
       2648 pts/0    00:00:00 bash
       4684 pts/0    00:00:00 sleep
      40527 pts/0    00:00:00 sleep
      40540 pts/0    00:00:00 ps
    [tcarrigan@client ~]$ killall -9 sleep 
    [2]-   Killed                  sleep 500
    [3]+   Killed                  sleep 500
```
Следующие две команды идут рука об руку. Они позволяют вам перемещать / управлять фоновыми командами. Я дам общий взгляд на синтаксис ниже; однако для более подробного изучения этих команд см. мою [предыдущую статью][11] на эту тему.

#### 5. Составьте список фоновых заданий и возобновите фоновые задания

Для составления списка фоновых заданий и управления ими мы будем использовать bgкоманду. 
Я запустил новый sleep 500 процесс, а затем остановил его, отправив в фоновый режим. Таким образом, мы видим его в списке при запуске bgниже:
```
    [tcarrigan@client ~]$ bg
    [1]+ sleep 500 &
```
#### 6. Выведите на передний план самую последнюю работу.

Для этого воспользуемся fg командой. Это выводит на передний план последнее запущенное задание / процесс.
Следующий пример является продолжением указанной выше команды. sleep 500
Процесс , который находится в фоновом режиме в настоящее время работает в фоновом режиме. Вынесем это на свет ...
```
    [tcarrigan@client ~]$ fg
    sleep 500
```
Эта команда подводит нас к нашей последней команде в этом списке.

#### 7. Выдвигайте конкретную работу на передний план.

Используйте fg команду еще раз, но выберите конкретное задание, которое нужно вывести на передний план (вместо самого последнего). Для этого мы просто добавим в команду имя задания / процесса.
```
    [tcarrigan@client ~]$ fg XXXample
```
Это выводит задание **XXXample** на передний план.

_**[Хотите проверить свои навыки системного администратора? [Пройдите оценку навыков сегодня.][12]]**_

## Подведение итогов

В сегодняшней статье «Основы команд Linux» мы рассмотрели процессы и способы управления ими. Теперь вы можете выполнять общие задачи управления процессами - все, от перечисления и уничтожения до перехода между фоном и передним планом. Если есть другие общие области администрирования Linux, для которых вы хотели бы видеть специальный список команд, напишите команде по адресу [enable-sysadmin@redhat.com][13] , и я сделаю все возможное, чтобы [конкретизировать][13] это для вас.


[2]: https://www.pexels.com/@minan1398?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels
[3]: https://www.pexels.com/photo/sticky-note-lot-1629212/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels
[4]: https://www.redhat.com/sysadmin/10-commands-terminal
[5]: https://www.redhat.com/sysadmin/10-more-commands-terminal
[6]: https://developers.redhat.com/cheat-sheets/advanced-linux-commands/?intcmp=701f20000012ngPAAQ
[7]: https://access.redhat.com/products/red-hat-insights/?intcmp=701f20000012ngPAAQ
[8]: https://developers.redhat.com/cheat-sheets/linux-commands-cheat-sheet/?intcmp=701f20000012ngPAAQ
[9]: https://rhtapps.redhat.com/assessment/?intcmp=701f20000012ngPAAQ
[10]: https://man7.org/linux/man-pages/man3/sleep.3.html
[11]: https://www.redhat.com/sysadmin/jobs-bg-fg
[12]: https://www.redhat.com/rhtapps/assessment/?intcmp=701f20000012ngPAAQ
