
import Swal from 'sweetalert2';


const addToDb = id => {
    let appliedJobs = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      appliedJobs = JSON.parse(storedCart)
    }
  
    // add quantity
    const previousApply = appliedJobs[id]
    if (previousApply) {
      const newQuantity = previousApply
      appliedJobs[id] = newQuantity

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You applied before!'
      })



    } else {
      appliedJobs[id] = 1

      Swal.fire(
        'Good job!',
        'You you have successfully applied',
        'success'
      )
    }
    localStorage.setItem('shopping-cart', JSON.stringify(appliedJobs))
  }
  
  const getAppliedJobs = () => {
    let appliedJobs = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      appliedJobs = JSON.parse(storedCart)
    }
    return appliedJobs
  }
  
  const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      const appliedJobs = JSON.parse(storedCart)
      if (id in appliedJobs) {
        delete appliedJobs[id]
        localStorage.setItem('shopping-cart', JSON.stringify(appliedJobs))
      }
    }
  }
  
  const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
  }
  
  export { addToDb, getAppliedJobs , removeFromDb, deleteShoppingCart }
  