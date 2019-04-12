function each(arr, tmpl) {
    let html = '';
    arr.forEach(el => {
        html += tmpl(el);
    });
    return html;
}

export const renderTable = (arr) => {
    return `${each(arr, templateTr)}`;
}

export const templateTr = (params) => {
    return `<tr>
               <td>${params.name}</td>
               <td>${params.id}</td>
               </tr>`
};