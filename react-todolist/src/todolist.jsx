import react from 'react';
import {useState, useEffect} from 'react';

export default todolist() {

    return (
        <div class="container">
        <div class="box">
          <h1>To Do List</h1>
          <div class="input-field">
            <input id="inputField" type="text" placeholder="할 일을 적어주세요">
            <button type="button" class="btn btn-outline-warning" id="addToDo"> + </button>
          </div>
          <div id="input" style="max-width: 800px; height: auto;">
            
            <div class="to-dos" id="htmlList">
              <div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                  <label class="form-check-label" for="flexCheckChecked">
                    example
                  </label>
                  <button type="button" class="btn-close" aria-label="Close"></button>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
}