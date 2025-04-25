//slider
var swiper = new Swiper(".mySwiper",{
    slidesPerView:3,
    spaceBetween:30,
    loop: true,
    loopFillGroupWithBlank:true,
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView:1
        },
        520: {
            slidesPerView:2
        },
        950:{
            slidesPerView:3
        }
    }
});






// Selecciona los botones de agregar al carrito
const botones = document.querySelectorAll('.agregar-carrito');

// Escucha los eventos de click en los botones de agregar al carrito
for(let boton of botones) {
    boton.addEventListener('click', function(event) {
        // Evita que la página se recargue
        event.preventDefault();

        // Encuentra el producto más cercano
        const producto = event.target.closest('.platillo');

        // Crea un objeto con los detalles del producto
        const productoInfo = {
            imagen: producto.querySelector('img').src,
            nombre: producto.querySelector('.c1').textContent,
            precio: producto.querySelector('.precio').textContent,
            id: event.target.getAttribute('data-id')
        };

        // Agrega el producto al carrito
        agregarAlCarrito(productoInfo);
    });
}

function agregarAlCarrito(producto) {
    // Selecciona el cuerpo de la tabla del carrito
    const cuerpoCarrito = document.querySelector('#lista-carrito tbody');

    // Crea un nuevo elemento de fila para la tabla
    const fila = document.createElement('tr');

    // Agrega las celdas a la fila
    fila.innerHTML = `
        <td><img src="${producto.imagen}" width=50></td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
        </td>
    `;

    // Agrega la fila al cuerpo de la tabla
    cuerpoCarrito.appendChild(fila);

    // Agrega el evento de click al botón de borrar producto
    fila.querySelector('.borrar-producto').addEventListener('click', borrarProducto);
}

function borrarProducto(event) {
    // Evita que la página se recargue
    event.preventDefault();

    // Borra el producto del carrito
    event.target.closest('tr').remove();
}

// Agrega el evento de click al botón de vaciar carrito
document.querySelector('#vaciar-carrito').addEventListener('click', function(event) {
    // Evita que la página se recargue
    event.preventDefault();

    // Vacía el carrito
    document.querySelector('#lista-carrito tbody').innerHTML = '';
});


// Agrega el evento de click al botón de pagar
document.querySelector('#pagar-carrito').addEventListener('click', function(event) {
    // Evita que la página se recargue
    event.preventDefault();

    // Aquí puedes agregar el código para manejar la acción de pagar
    if(confirm('¿Estás seguro de que quieres pagar?')) {
        document.querySelector('#lista-carrito tbody').innerHTML = '';
        alert('Gracias por tu compra!');
    }
});



$("#formValidation").validate({
    rules:{
        nombre:{
            minlength:3
        },
        correo:{
            required:true,
            email:true
        },
        mensaje:{
            required:true,
            minlength:10
        }
    },
    submitHandler: function(form) {
    form.submit();
    }
});