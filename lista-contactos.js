contact1 = {
    nombre:'Sebastian',
    apellido: 'Motta',
    telefono: 3156566927,
    id:1
}
contact2 = {
    nombre: 'Mercedes',
    apellido: 'Moreno',
    telefono: 3155543122,
    id:2
}
contact3 = {
    nombre: 'Franklyn',
    apellido: 'Motta',
    telefono: 3152791453,
    id:3
}
contact4 = {
    nombre: 'Cesar',
    apellido: 'Ticona',
    telefono: 3188312908,
    id:4
}
const myarray=[
 contact1, contact2, contact3, contact4
]


const addcontact = (nombre1,apellido1,telefono1,id1) => {
   const otroContacto={ 
    nombre: nombre1,
    apellido: apellido1, 
    telefono: telefono1,
    id:id1,
   }
   myarray.push(otroContacto)
}
addcontact('maria','cortes',3145657832,5)
 
addcontact('jose', 'marquez',3212987654, 6)

const mostrarLista = (lista) => {
console.log(lista);
}
mostrarLista(myarray)
//mostrarLista(contact1)

const deleteContact = (nombre1) => {
const deleteCon={
nombre:nombre1
}
myarray.pop(deleteCon)
}
deleteContact()

console.log(myarray);
