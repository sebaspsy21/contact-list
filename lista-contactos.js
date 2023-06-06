contact1 = {
    nombre:'Sebastian',
    apellido: 'Motta',
    telefono: 3156566927,
    id:1,
    ubicacion: ['ciudad:Bogota', 'direccion:Privada']
}
contact2 = {
    nombre: 'Mercedes',
    apellido: 'Moreno',
    telefono: 3155543122,
    id:2,
    ubicacion: [ 'ciudad:Neiva', 'direccion:Privada']
}
contact3 = {
    nombre: 'Franklyn',
    apellido: 'Motta',
    telefono: 3152791453,
    id:3,
    ubicacion: ['ciudad:Neiva', 'direccion:Privada']
}
contact4 = {
    nombre: 'Cesar',
    apellido: 'Ticona',
    telefono: 3188312908,
    id:4,
    ubicacion: ['ciudad:Lima', 'direccion:Privada']
}
let myarray=[
 contact1, contact2, contact3, contact4
]


const addcontact = (nombre1,apellido1,telefono1,id1, ubicacion1) => {
   const otroContacto={ 
    nombre: nombre1,
    apellido: apellido1, 
    telefono: telefono1,
    id:id1,
    ubicacion:ubicacion1
   }
   myarray.push(otroContacto)
}
addcontact('maria','cortes',3145657832,5, ['ciudad:Cali, direccion:Privada'])
addcontact('jose', 'marquez',3212987654, 6, ['ciudad:Pereira, direccion:Privada'])

const mostrarLista = (lista) => {

    console.log(lista);
}
mostrarLista(myarray)
//mostrarLista(contact1)

const deleteContact = () => {
myarray.pop()
}
deleteContact()

console.log(myarray);

const deleteEspecific = (nombre) => {
 let newArray= myarray.filter((contact)=> {
    return contact.nombre!=nombre
})
myarray=newArray
}
deleteEspecific('Mercedes')
console.log(myarray);