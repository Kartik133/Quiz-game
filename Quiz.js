class Quiz {
    constructor() {
        this.title = createElement("h2");
        this.question = createElement("h3");
        this.option1 = createElement("h3");
        this.option2 = createElement("h3");
        this.option3 = createElement("h3");
        this.option4 = createElement("h3");
        this.input1 = createInput("Contestent Name");
        this.input2 = createInput("Answer");
        this.button = createButton("Submit");
    }

    hide() {
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }

    display() {
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What starts with the letter 'E', but has only one letter? ");
        this.question.position(150,80);

        this.option1.html("(1) Everyone");
        this.option1.position(150,100);

        this.option2.html("(2) Envelope");
        this.option2.position(150,120);

        this.option3.html("(3) Estimate");
        this.option3.position(150,140);
           
        this.option4.html("(4) Example");
        this.option4.position(150,160);

        this.input1.position(150,230);

        this.input2.position(350,230);

        this.button.position(550,230);
        this.button.mousePressed(() =>{
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            player.name = this.input1.value();
            player.answer = this.input2.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        });
    }
}