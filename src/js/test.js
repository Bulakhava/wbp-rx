let add = (a, b) => a + b;

import {combineLatest, Observable} from "rxjs";
import {fromEvent} from 'rxjs';
import {of} from 'rxjs';
import {interval} from 'rxjs';
import {take, withLatestFrom} from 'rxjs/operators';
import {timer} from 'rxjs';
import {range} from 'rxjs';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import {pluck} from 'rxjs/operators';
import {first} from 'rxjs/operators';
import {last} from 'rxjs/operators';
import {find} from 'rxjs/operators';
import {findIndex} from 'rxjs/operators';
import {skip} from 'rxjs/operators';
import {skipWhile} from 'rxjs/operators';
import {skipUntil} from 'rxjs/operators';
import {takeWhile} from 'rxjs/operators';
import {takeUntil} from 'rxjs/operators';
import {filter} from 'rxjs/operators';
import {debounceTime} from 'rxjs/operators';
import {distinct} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/operators';
import {buffer, bufferTime, bufferCount, defaultIfEmpty, every, tap, delay, mergeAll, concatAll, mergeMap, concatMap} from 'rxjs/operators';
//import {  merge } from 'rxjs/operators';
import {  merge } from 'rxjs';
import {  concat, zip } from 'rxjs';

var stream$ = Observable.create(function (observer) {

    observer.next('One');

    setTimeout(() => {
        observer.error('Error');
    }, 3000);

    setTimeout(() => {
        observer.next('After 5 seconds');
    }, 5000);
    // observer.complete();
    observer.next('two');
});

// stream$.subscribe(
//     (data) => {
//         console.log(data);
//     },
//     (err)=>{
//         console.log(err);
//     },
//     ()=>{
//         console.log('complete');
//     }
// );
//
// const button = document.body.querySelector('button');
//
// const btn$ = fromEvent(button, 'click');
//
// btn$.subscribe(
//     (e) => {
//      console.log(e);
//     }
// );
//
// fromEvent(document.body.querySelector('input'), 'keyup')
//        .subscribe(
//           e => console.log(e)
//        );
//
// fromEvent(document, 'mousemove')
//     .subscribe(
//         e => {
//             document.body.querySelector('h1').innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;
//         }
//     );

function createSubs(name) {
    return {
        next(x) {
            console.log(name, ': ', x);
        },
        error(err) {
            console.log('Error', ': ', err);
        },
        complete() {
            console.log(name, 'completed');
        }
    }
}

// of(5,7,9,7, [8]).subscribe(
//     createSubs('of')
// );

// interval(500)
//     .pipe(take(10))
//     .subscribe(
//      createSubs('interval')
// );

// interval(4000,500)
//     .pipe(take(10))
//     .subscribe(
//         createSubs('timer')
//     );
//
// range(5,11)
//     .subscribe(
//         createSubs('range')
//     );

//
// const arr = [
//     {
//         id:1,
//         name:'name1'
//     },
//     {
//         id:2,
//         name:'name2'
//     }
// ];


//const set = new Set([1,2,3,'4', '5', {id:6}]);
//
//  const map = new Map([[1, 2],[3, 4], [5, 6]]);
//
// from(map).subscribe(
//     createSubs('from')
// );

// function delay(ms = 1000) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, ms)
//     });
//
// }

// delay(3000).then(()=>{
//    console.log('Promise wos resolved!');
// });

// interval(1000)
//     .pipe(
//         map( x=> x * x ),
//         take(10)
//     )
//     .subscribe(
//         createSubs('map')
//     );

// of('hello', 'world', 'asd')
//     .pipe(
//         map( x=> x.toUpperCase() ),
//     )
//     .subscribe(
//         createSubs('of')
//     );

// fromEvent(document.body.querySelector('input'), 'keyup')
//     .pipe(
//        // map( e => e.target.value ),
//         pluck('target', 'value'),
//         map(str => str.toUpperCase()),
//         map(x => {
//             return {
//                 value: x,
//                 length: x.length
//             }
//         })
//     )
//     .subscribe(
//          createSubs('fromEvent')
//        );

// of(1, 5, 'Hello', 'world')
//     .pipe(
//       find(x => {
//      if(typeof x === 'string'){
//          return x.toLowerCase() === 'hello'
//      }
//       })
//     )
//     .subscribe(
//         createSubs('find')
//     );

// of(1, 5, 'Hello', 'world')
//     .pipe(
//         findIndex(x => x === 5)
//     )
//     .subscribe(
//         createSubs('find')
//     );

// of(1, 5, 'Hello', 'world')
//     .pipe(
//         skip(1)
//     )
//     .subscribe(
//         createSubs('skip')
//     );

// of(1, 5, 'Hello', 'world')
//     .pipe(
//         skipWhile(x => {
//             return typeof x === 'number'
//         })
//     )
//     .subscribe(
//         createSubs('skipWhile')
//     );

// interval(500)
//     .pipe(
//         skipWhile(x => x < 5),
//         takeWhile(x => x < 12)
//        )
//       .subscribe(createSubs('skipWhile'));

// interval(500)
//     .pipe(
//         skipUntil(timer(3000)),
//     )
//     .subscribe(createSubs('skipUntil'));

// interval(500)
//     .pipe(
//         skipUntil(timer(3000)),
//         takeUntil(timer(5000)),
//     )
//     .subscribe(createSubs('skipUntil'));


// range(0, 10)
//     .pipe(
//      filter(x => x > 3)
//     )
//     .subscribe(createSubs('filter'));

// const cars = [
//     {
//         name: 'audi',
//         price: 500
//     },
//     {
//         name: 'bmw',
//         price: 400
//     },
//     {
//         name: 'ford',
//         price: 200
//     }
// ];


// fromEvent(document.body.querySelector('input'), 'keyup')
//     .pipe(
//         map(e => e.target.value)
//     )
//     .subscribe(x => {
//             from(cars)
//                 .pipe(
//                     filter(c => c.name === x)
//                 ).subscribe(v => {
//
//                     document.querySelector('.cars').innerHTML = `<h2>${v.name}</h2><h4>${v.price}</h4>`;
//             })
//         }
//     );

// fromEvent(document.body.querySelector('input'), 'keyup')
//     .pipe(
//         map(e => e.target.value),
//         distinct(),
//       //  debounceTime(1500)
//     )
//     .subscribe(createSubs('debounceTime'));


// from([1,2,33,3,3,5,5,1,1,99,99,2,4,6,1])
//     .pipe(
//         distinctUntilChanged()
//     )
//     .subscribe(createSubs('from'));

//
// interval(500)
//     .pipe(
//         bufferTime(2000),
//         take(4)
//     ).subscribe(createSubs('buffer'));

//
// range(0, 40)
//     .pipe(
//         bufferCount(5),
//     ).subscribe(createSubs('buffer'));

// interval(1000)
//     .pipe(
//         buffer(
//             fromEvent(document, 'click')
//         ),
//         map(x => x.length)
//     ).subscribe(createSubs('buffer'));

 // of()
 //     .pipe(
 //         defaultIfEmpty('I am empty')
 //     )
 //    .subscribe(createSubs('of'));

// from([1,2,3,4,5])
//     .pipe(
//        every(x => x % 2 === 0)
//     )
//     .subscribe(createSubs('of'));

// from([1,2,3,4,5])
//     .pipe(
//         tap(x => console.log('Before', x)),
//         map(x=> x*x)
//     )
//     .subscribe(createSubs('of'));

// range(1,3)
//     .pipe(
//         map(x=> x*x),
//         delay(500)
//     )
//     .subscribe(createSubs('delay'));


// const s1$ = of('Hello');
// const s2$ = of('World');

// s1$.pipe(
//     merge(s2$)
// ).subscribe(createSubs('merge'));

//merge(s1$ ,s2$).subscribe(createSubs('merge'));

// const s1$ = interval(1000).pipe(
//     map(x=> 'strim1 '+ x)
// );
// const s2$ = interval(500).pipe(
//     map(x=> 'strim2 '+ x)
// );
//
// merge(s1$ ,s2$)
//     .pipe(
//         take(12)
//     )
//     .subscribe(createSubs('merge'));

// range(1,3)
//   .pipe(
//       map(x => range(1,3)),
//       mergeAll()
//   ).subscribe(createSubs('mergeAll'));

// const s1$ = from([1,2,3]);
// const s2$ = from([4,5,6]);
//
// concat(s1$, s2$).subscribe(createSubs('concat'));

// range(1,3)
//   .pipe(
//       map(x => range(x,3)),
//       concatAll()
//   ).subscribe(createSubs('concatAll'));

// of('Hello')
//    .pipe(
//        mergeMap(x => {
//            return of(x + ' World!')
//        })
//    ).subscribe(createSubs('mergeMap'));

// const promise = (data) => {
//     return new Promise((resolve , reject) => {
//        setTimeout(() => {
//            resolve(data + ' wish you good luck!');
//        }, 2000)
//     })
// };
//
// of('WSE')
//   .pipe(
//       mergeMap(x => {
//           return promise(x);
//       })
//   ).subscribe(createSubs('promise'));

// range(1, 10)
// .pipe(
//     concatMap((x, i)=>{
//         return interval(200)
//             .pipe(
//                 take(x),
//                 map(q => i)
//             )
//     }),
//
// ).subscribe(createSubs('concatMap'));

// const s1$ = of([1,3]).pipe(
//     delay(3000)
// );
// const s2$ = of('World');
// zip(s1$, s2$)
//     .subscribe(createSubs('zip'));

// const interval$ = interval(1000);
//
// zip(interval$,
//     interval$.pipe(take(3))
//     )
//     .subscribe(createSubs('zip'));

//
// const int1$ = interval(1000);
// const int2$ = interval(500);
//
// int1$.pipe(
//     withLatestFrom(int2$)
// ).subscribe(createSubs('withLatestFrom'));

// const t1$ = timer(1000, 2000);
// const t2$ = timer(2000, 2000);
// const t3$ = timer(3000, 2000);
// const t1$ = of([1,2,3]);
// const t2$ = of(['a', 'b']);
// const t3$ = of([5,5,5,5,5]);
//
//
// combineLatest(t1$, t2$, t3$)
//     .subscribe(createSubs('combineLatest'));




// ES6

// const arr = [1, 77, 99];
//
// let [a, , c] = arr;
//
// //console.log(a, c);
//
//
// //REST
//
// function logStr(num, ...args) {
//     console.log(num,args )
// }
//
// let sprArr = ['a','c', 'g'];
//
// logStr(28, ...sprArr)
 // SET

