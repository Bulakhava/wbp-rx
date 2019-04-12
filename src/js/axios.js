import {map, switchMap, filter, tap} from 'rxjs/operators';
import {fromEvent, from, of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
//import $ from "jquery";
//import datepickerFactory from 'jquery-datepicker';
//import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-ja';
import {templateTr} from './templates';
import {testTpl, renderTable} from './templates';

if (window.location.href.indexOf('axios') !== -1) {

    // datepickerFactory($);
    //  datepickerJAFactory($);

    const data = [
        {
            name: 'jon',
            id: '3434546346'
        },
        {
            name: 'mary',
            id: '5675685'
        },
        {
            name: 'bill',
            id: '3434546346'
        },
        {
            name: 'semm',
            id: '555'
        },
        {
            name: 'jon',
            id: '3434546346'
        },
        {
            name: 'mary',
            id: '5675685'
        },
        {
            name: 'bill',
            id: '3434546346'
        },
        {
            name: 'semm',
            id: '555'
        },
        {
            name: 'jon',
            id: '3434546346'
        },
        {
            name: 'mary',
            id: '5675685'
        },
        {
            name: 'bill',
            id: '3434546346'
        },
        {
            name: 'semm',
            id: '555'
        },
        {
            name: 'jon',
            id: '3434546346'
        },
        {
            name: 'mary',
            id: '5675685'
        },
        {
            name: 'bill',
            id: '3434546346'
        },
        {
            name: 'semm',
            id: '555'
        },
        {
            name: 'jon',
            id: '3434546346'
        },
        {
            name: 'mary',
            id: '5675685'
        },
        {
            name: 'bill',
            id: '3434546346'
        },
        {
            name: 'semm',
            id: '555'
        },
        {
            name: 'bill',
            id: '3434546346'
        },
        {
            name: 'semm',
            id: '555'
        }
    ]


        const datepicker = $('#datepicker');
        const filter = $('#filter');
        const percent = $('#percent');

        datepicker.daterangepicker({
            locale: {
                format: 'D.MM.YYYY'
            }
        });

        // $.datepicker.regional["ru"] = {
        //     closeText: 'Закрыть',
        //     prevText: '&#x3c;Пред',
        //     nextText: 'След&#x3e;',
        //     currentText: 'Сегодня',
        //     monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        //         'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        //     monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        //         'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        //     dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        //     dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        //     dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        //     weekHeader: 'Нед',
        //     dateFormat: 'dd.mm.yy',
        //     firstDay: 1,
        //     isRTL: false,
        //     showMonthAfterYear: false,
        //     yearSuffix: ''
        // }
        // $.datepicker.setDefaults($.datepicker.regional['ru']);


        fromEvent(datepicker, 'change')
            .pipe(map(e => e.target.value))
            .subscribe(val => {
                render(data);
            });

        fromEvent(filter, 'change')
            .pipe(map(e => e.target.value))
            .subscribe(val => {
                const d = data.filter(x => x.id == val);
                render(d);
            });


        const render = (data) => {
            new Table(data);
        }

        class Table {
            constructor(params) {
                this.params = params;
                this.table = $('#userList tbody');
                this.clearTable();
                this.renderTable(this.params);
                this.setPagination(10);
            }

            renderTable(params) {
                this.table.append(renderTable(params));
            }

            clearTable() {
                this.table.empty();
                $('#nav').remove();
            }

            setPagination(rowsShown) {
                $('#userList').after('<div id="nav"></div>');
                var tr = $('#userList tbody tr');
                var rowsTotal = tr.length;
                var numPages = Math.ceil(rowsTotal / rowsShown);
                if (numPages > 1) {
                    for (var i = 0; i < numPages; i++) {
                        var pageNum = i + 1;
                        $('#nav').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
                    }
                }
                tr.hide();
                tr.slice(0, rowsShown).show();
                $('#nav a:first').addClass('active');
                $('#nav a').bind('click', function () {
                    $('#nav a').removeClass('active');
                    $(this).addClass('active');
                    var currPage = $(this).attr('rel');
                    var startItem = currPage * rowsShown;
                    var endItem = startItem + rowsShown;
                    tr.css('opacity', '0.0').hide().slice(startItem, endItem).css('display', 'table-row').animate({opacity: 1}, 300);
                });
            }

        }

        render(data);


    // var formData = new FormData();
    // var data = {I_want: 'post_links'};
    // formData.append('data', JSON.stringify(data));
    //
    // ajax.post('https://hiendsys.ru/news/wp-content/themes/hiendsys_ru/sitemap.php', formData)
    //     .pipe(map(res => res.response))
    //     .subscribe(x => console.log(x));


}


