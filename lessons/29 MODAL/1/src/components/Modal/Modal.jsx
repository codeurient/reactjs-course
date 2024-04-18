// 1) Mezmun olaraq CHILDREN parametri qebul edecek mezmunu.
export default function Modal({children}) {

    // 2) p tag-inin icinde olduqda Ekranda neticeni goreceyik. ancaq DIALOG tag-leri avtomatik olaraq modal pencereni gizledir deye hecne gormuruk.
    return <dialog>{children}</dialog>

}