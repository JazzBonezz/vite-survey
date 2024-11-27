const part2Questions = [
    {
      type: "Select",
      name: "Чувствуете ли Вы боль в ногах при ходьбе?",
      options: [
        { value: 2, label: "Да, сильно" },
        { value: 1, label: "Да, умеренно" },
        { value: 0.5, label: "Да, слегка" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Устают ли Ваши ноги при ходьбе быстрее, чем раньше?",
      options: [
        { value: 1, label: "Да, значительно быстрее" },
        { value: 0.5, label: "Да, немного быстрее)" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Ощущаете ли Вы онемение или покалывание в ногах?",
      options: [
        { value: 2, label: "Да, часто" },
        { value: 1, label: "Да, иногда" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Холодеют ли Ваши ноги чаще, чем раньше?",
      options: [
        { value: 2, label: "Да, значительно чаще" },
        { value: 1, label: "Да, немного чаще" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Изменился ли цвет кожи на ногах (побледнела, посинела)?",
      options: [
        { value: 2, label: "Да, заметно" },
        { value: 1, label: "Да, слегка" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Медленно ли заживают раны на ногах?",
      options: [
        { value: 2, label: "Да, значительно медленнее" },
        { value: 1, label: "Да, немного медленнее" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Появляются ли судороги в ногах, особенно ночью?",
      options: [
        { value: 2, label: "Да, часто" },
        { value: 1, label: "Да, иногда" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Наблюдаете ли Вы выпадение волос на ногах?",
      options: [
        { value: 1, label: "Да, значительно" },
        { value: 0.5, label: "Да, немного" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Чувствуете ли Вы слабость в ногах?",
      options: [
        { value: 1, label: "Да, сильно" },
        { value: 0.5, label: "Да, умеренно" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Ограничивает ли боль в ногах Вашу активность?",
      options: [
        { value: 1, label: "Да, сильно ограничивает" },
        { value: 0.5, label: "Да, немного ограничивает" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Чувствуете ли Вы пульсацию в ногах?",
      options: [
        { value: 2, label: "Да, часто" },
        { value: 1, label: "Да, иногда" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Ощущаете ли Вы тяжесть в ногах?",
      options: [
        { value: 1, label: "Да, сильно" },
        { value: 0.5, label: "Да, умеренно" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Набухают ли Ваши ноги к вечеру?",
      options: [
        { value: 1, label: "Да, сильно" },
        { value: 0.5, label: "Да, немного" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Были ли у вас отеки ног?",
      options: [
        { value: 1, label: "Да, часто" },
        { value: 0.5, label: "Да, иногда" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Изменилась ли температура кожи на ногах?",
      options: [
        { value: 1, label: "Да, значительно изменилась" },
        { value: 0.5, label: "Да, немного изменилась" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Наблюдаете ли Вы появление язв на ногах?",
      options: [
        { value: 2, label: "Да, часто" },
        { value: 1, label: "Да, иногда" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Хромаете ли вы при ходьбе?",
      options: [
        { value: 2, label: "Да, постоянно" },
        { value: 1, label: "Да, иногда" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Чувствуете ли Вы боли в груди?",
      options: [
        { value: 2, label: "Да" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Были ли у Вас приступы одышки?",
      options: [
        { value: 1, label: "Да" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Чувствуете ли Вы головокружение?",
      options: [
        { value: 1, label: "Да" },
        { value: 0, label: "Нет" },
      ],
    },
    {
      type: "Select",
      name: "Как Вы оцениваете свое общее состояние?",
      options: [
        { value: 1, label: "Средней степени тяжести" },
        { value: 0, label: "Удовлетворительное" },
      ],
    },
    {
      type: "Select",
      name: "Изменилась ли Ваша походка/осанка?",
      options: [
        { value: 2, label: "Да" },
        { value: 0, label: "Нет " },
      ],
    },
    {
      type: "Select",
      name: "Можете ли Вы справляться с повседневными задачами?",
      options: [
        { value: 1, label: "Да" },
        { value: 0, label: "Нет" },
      ],
    },


  ];
  
  export default part2Questions;
  