const resultFragment = () =>{
    return `
    <div class="row justify-content-center">
        <input type="text" value="0" disabled class="result col-4 p-2 mt-5 bg-dark text-light text-center ">
    </div>
    `
};


const operationFragment = () =>{
    return `
    <!-- operation buttons -->
    <div class="row justify-content-center">
        <div class="btn btn-primary col-1 m-1 opr-btn">+</div>
        <div class="btn btn-primary col-1 m-1 opr-btn">-</div>
        <div class="btn btn-primary col-1 m-1 opr-btn">*</div>
        <div class="btn btn-primary col-1 m-1 opr-btn">/</div>
    </div>
    `
};

const numberFragment = () =>{
    return `
    <!-- Number buttons -->
    <div class="row justify-content-center">
        <div class="btn btn-warning col-1 m-1 number-btn">1</div>
        <div class="btn btn-warning col-1 m-1 number-btn">2</div>
        <div class="btn btn-warning col-1 m-1 number-btn">3</div>
        <div class="btn btn-warning col-1 m-1 number-btn">4</div>
    </div>
    <div class="row justify-content-center">
        <div class="btn btn-warning col-1 m-1 number-btn">5</div>
        <div class="btn btn-warning col-1 m-1 number-btn">6</div>
        <div class="btn btn-warning col-1 m-1 number-btn">7</div>
        <div class="btn btn-warning col-1 m-1 number-btn">8</div>
    </div>
    <div class="row justify-content-center">
        <div class="btn btn-warning col-1 m-1 number-btn">9</div>
        <div class="btn btn-warning col-1 m-1 number-btn">0</div>
        <div class="btn btn-warning col-1 m-1 number-btn">.</div>
      <!-- clear button -->
        <div class="btn btn-danger col-1 m-1 clear">AC</div> 
    </div>
    `
};


const equalFragment = () =>{
    return `
    <!-- equal button -->
    <div class="row justify-content-center">
        <div class="btn btn-success col-4 ms-0 equal">=</div>
    </div>
    `
};


const headerFragment = () =>{
    return `
    <div class="container calculator-container">
        <div class="row"> 
            ${resultFragment()}<!-- result fragment -->
           
            <div class="calc-button">
            ${operationFragment()}<!-- operation fragment -->

            ${numberFragment()}<!-- number fragment -->
              
            ${equalFragment()}<!-- equal fragment -->
                
            </div>     
        </div>
    </div>
    `
};

