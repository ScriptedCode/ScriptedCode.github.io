

const Events = (() => {
  const navbar = document.querySelector('.navbar');


  // add class to navbar
  window.addEventListener('scroll', () => {
    let height = document.documentElement.scrollTop || window.pageYOffset;


    (height > 76) ? navbar.classList.add('navbar-change')
      : navbar.classList.remove('navbar-change');
    ;

  })
  // hide preloader
  window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'))
})();

// display all cars
const DisplayCars = ((CreateCars) => {
  // all cars
  const cars = CreateCars.cars;
  // console.log(cars);

  // car container
  const inventory = document.querySelector('.inventory-container');

  // content loaded 
  document.addEventListener('DOMContentLoaded', () => {
    inventory.innerHTML = '';

    let output = '';
    cars.forEach((car) => {
      output += ` <!-- single car -->
        <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
          <div class="card car-card">
            <img src="${car.img}" class="card-img-top car-img" alt="">
            <!-- card body -->
            <div class="card-body">
              <div class="car-info d-flex justify-content-between">
                <!-- first flex child -->
                <div class="car-text text-uppercase">
                  <h6 class="font-weight-bold">${car.make}</h6>
                  <h6>${car.model}</h6>
                </div>
                <!-- second flex child -->
                <h5 class="car-value align-self-center py-2 px-3">$
                  <span class="car-price">${car.price}</span>
                </h5>
              </div>
            </div>
            <!-- end of card -->
            <div class="card-footer text-capitalize d-flex justify-content-between">
              <p><span><i class="fas fa-car"></i></span>${car.type}</p>
              <p><span><i class="fas fa-cogs"></i></span>${car.trans}</p>
              <p><span><i class="fas fa-gas-pump"></i></span>${car.gas}</p>
            </div>
          </div>
        </div>
        <!--end of single car -->`
    })
    inventory.innerHTML = output;
  })

})(CreateCars);
// fitler cars
const FilterCars = (() => {
  const filter = document.querySelectorAll('.filter-btn');

  filter.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const value = event.target.dataset.filter;
      const singleCar = document.querySelectorAll('.single-car');

      singleCar.forEach(car => {
        if (value === 'all') {
          car.style.display = 'block';
        }
        else {
          (!car.classList.contains(value)) ? car.style.display = 'none' : car.style.display = 'block';
        }
      })

    })
  })
})();
// show modal
const Gallery = (() => {
  // all items
  const items = document.querySelectorAll('.gallery-item');
  // modal
  const showcase = document.querySelector('.showcase');

  items.forEach(item => {
    item.addEventListener('click', (event) => {
      showcase.classList.add('showcase-show');
      if (event.target.classList.contains('gallery-item')) {
        let src = event.target.childNodes[1].src;
        document.querySelector('.showcase-img').src = src;


      }
    })
  })
  // close modal
  document.querySelector('.showcase-close').addEventListener('click', () => {
    showcase.classList.remove('showcase-show')
  })

})();