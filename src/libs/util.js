let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'vitcourse';
    window.document.title = title;
};

export default util;
