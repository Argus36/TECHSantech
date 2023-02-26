const width = window.innerWidth
const link = document.querySelector("#link");
const link_Mobile = document.querySelector("#Mobile_link");
const super_Mobile_link = document.querySelector("#super_Mobile_link");

if (width < 1250) {
    link.remove();
}else {
    link_Mobile.remove();
};
if (width < 1000) {
    link.remove();
    link_Mobile.remove();
}else {
    super_Mobile_link.remove();
};