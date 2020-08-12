document.querySelector("#add-time")

.addEventListener('click', cloneField)

function cloneField() {

    const newFieldConteiner = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldConteiner.querySelectorAll('input')

    fields.forEach(function(field){
        field.value=""
    })

    
    document.querySelector('#schedule-items').appendChild(newFieldConteiner)
}
