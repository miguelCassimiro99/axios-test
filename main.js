axios.get('https://reqres.in/api/users/2')
.then(function (response){
    console.log(response.data.ad.company);
})
.catch(function(error){
    console.log(error);
    alert("Ops, algo deu errado");
})