import {interval, from, zip, fromEvent} from "rxjs";

//if (window.location.href.includes('second')) {
if(window.location.href.indexOf('second') !== -1){
    const params = [

        [
            {
                'background-position': '10px -200px',
                top: '30px',
                left: '480px'
            },
            {
                'background-position': '-70px -200px',
                top: '40px',
                left: '490px'
            },
            {
                'background-position': '-150px -200px',
                top: '50px',
                left: '500px'
            },
            {
                'background-position': '-240px -200px',
                top: '60px',
                left: '510px'
            },
            {
                'background-position': '-330px -200px',
                top: '70px',
                left: '500px'
            },
            {
                'background-position': '-420px -200px',
                top: '80px',
                left: '490px'
            },
            {
                'background-position': '-510px -200px',
                top: '90px',
                left: '480px'
            },
            {
                'background-position': '-600px -200px',
                top: '100px',
                left: '470px'
            },
            {
                'background-position': '-690px -200px',
                top: '110px',
                left: '460px'
            },
            {
                'background-position': '-770px -200px',
                top: '120px',
                left: '450px'
            },
        ],

        [
            {
                'background-position': '-770px -40px',
                top: '130px',
                left: '440px'
            },
            {
                'background-position': '-690px -40px',
                top: '140px',
                left: '430px'
            },
            {
                'background-position': '-600px -40px',
                top: '140px',
                left: '420px'
            },
            {
                'background-position': '-510px -40px',
                top: '150px',
                left: '410px'
            },
            {
                'background-position': '-420px -40px',
                top: '170px',
                left: '400px'
            },
            {
                'background-position': '-340px -40px',
                top: '170px',
                left: '390px'
            },
            {
                'background-position': '-255px -40px',
                top: '180px',
                left: '380px'
            },
            {
                'background-position': '-170px -40px',
                top: '190px',
                left: '370px'
            },
            {
                'background-position': '-90px -40px',
                top: '200px',
                left: '360px'
            },
            {
                'background-position': '-10px -40px',
                top: '210px',
                left: '350px'
            },
        ]

    ];

    let index = 0;
    const butterfly = document.querySelector('.butterfly');
    const flower = document.querySelector('.flower');

    const init = () => {
        index = 0;
        new Butterfly(params[index], butterfly);
    };

      fromEvent(butterfly, 'click')
            .subscribe(() => init());

        fromEvent(flower, 'click')
            .subscribe(() => init());


    class Butterfly {
        constructor(params, elem) {
            this.params = params;
            this.elem = elem;
            this.fly();
        }

        move(param) {
            this.elem.style.backgroundPosition = param['background-position'];
            this.elem.style.top = param['top'];
            this.elem.style.left = param['left'];
        }

        fly() {
            zip(interval(50),
                from(this.params)
            ).subscribe(
                ([, params]) => this.move(params),
                error => console.log(error),
                () => {
                    index++;
                    if ((params.length - 1) >= index) {
                        new Butterfly(params[index], butterfly);
                    }
                }
            );
        }
   }

}










