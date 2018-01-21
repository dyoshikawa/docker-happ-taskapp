import "../../node_modules/jquery/dist/jquery.js"
import "../../node_modules/popper.js/dist/umd/popper.js"
import "../../node_modules/bootstrap/dist/js/bootstrap.js"

import { h, app } from "hyperapp"

const state = {
  count: 0,
  tasks: [{ id: "test", text: "test" }, { id: "test", text: "test" }, { id: "test", text: "test" }]
};

const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 }),
  add: () => state => ({
      count: state.count + 1,
      // tasks:
    })
};

const view = (state, actions) => (
  <main>
    <div class="container">
      <h1>{state.count}</h1>
      <button onclick={actions.down}>-</button>
      <button onclick={actions.up}>+</button>

      <h1>Hyper Task App</h1>

      <input class="form-control" id="test" onchange={actions.change}></input>

      <button onclick={actions.add} class="btn btn-block btn-primary">ADD TASK</button>

      <div class="card">
        <div class="card-header">
          Task{state.count}
        </div>
        <div class="card-body">
          <ul>
            {state.tasks.map(({ id, text }) => (
              <li id={id}>{text}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  </main>
);

const main = app(state, actions, view, document.body);