$(".eatButton").click(function (event) {
    console.log(event.target)
    fetch("/burgers", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: event.target.dataset.id
            })
        })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            location.reload()
        })
})

$(".deleteBurger").click(function (event) {
    fetch("/burgers", {
      method: "DELETE", 
    })
    .then(res => res.json())
    .then(res => location.reload())
})