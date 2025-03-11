import "./App.css";
import List from "./components/List";
import Card from "./components/Card";
import Description from "./components/Description";

function App() {
  return (
    <>
      <div className="main-container">
        <Card
          title="Lorem ipsum dolor"
          description={
            <Description>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Excepteur eiusmod consectetur proident Lorem reprehenderit esse
                do anim velit in aliquip dolore ut officia. Consectetur
                reprehenderit proident do exercitation eu. Sunt fugiat pariatur
                elit est laboris quis. Esse mollit incididunt quis amet. Qui non
                irure incididunt laborum nisi cillum consequat aliquip aliquip
                cillum in. Ut excepteur labore voluptate tempor cupidatat dolor
                eiusmod do ipsum Lorem cupidatat do labore.
              </p>
              <p>
                Proident dolore nisi eiusmod excepteur aliquip esse ut
                excepteur. Non excepteur sunt reprehenderit sit ex ullamco
                eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim
                elit minim commodo qui culpa cillum duis fugiat consequat
                pariatur.
              </p>
            </Description>
          }
          images={[
            {
              src: "./images/card-1.png",
              alt: "Card 1",
              id: "1",
            },
            {
              src: "./images/card-2.png",
              alt: "Card 2",
              id: "2",
            },
          ]}
        />
      </div>
      <div className="main-container">
        <List
          items={[
            {
              id: "1",
              title: "Lorem ipsum",
              description: (
                <Description>
                  <h3>Excepteur eiusmod consectetur</h3>
                  <small>
                    Proident dolore nisi eiusmod excepteur aliquip esse ut
                    excepteur. Non excepteur sunt reprehenderit sit ex ullamco
                    eiusmod Lorem incididunt nisi mollit nostrud. Irure velit
                    enim elit minim commodo qui culpa cillum duis fugiat
                    consequat pariatur.
                  </small>
                  <h3>Excepteur eiusmod consectetur</h3>
                  <small>
                    Proident dolore nisi eiusmod excepteur aliquip esse ut
                    excepteur. Non excepteur sunt reprehenderit sit ex ullamco
                    eiusmod Lorem incididunt nisi mollit nostrud. Irure velit
                    enim elit minim commodo qui culpa cillum duis fugiat
                    consequat pariatur.
                  </small>
                  <h3>Excepteur eiusmod consectetur</h3>
                  <small>
                    Proident dolore nisi eiusmod excepteur aliquip esse ut
                    excepteur. Non excepteur sunt reprehenderit sit ex ullamco
                    eiusmod Lorem incididunt nisi mollit nostrud. Irure velit
                    enim elit minim commodo qui culpa cillum duis fugiat
                    consequat pariatur.
                  </small>
                </Description>
              ),
              image: "./images/card-3.png",
            },
            {
              id: "2",
              title: "Mollit aliquip do ipsum consectetur",
              description: (
                <Description>
                  <p>
                    <small>
                      Ex laborum ea qui consectetur mollit commodo eiusmod culpa
                      dolor cupidatat. Ullamco dolore irure ea sit elit velit non
                      officia. Ad eu reprehenderit in et voluptate mollit.
                      Reprehenderit incididunt magna consequat enim sit eiusmod
                      est dolor laborum cupidatat.
                    </small>
                  </p>
                  <small>
                    Ipsum minim mollit irure dolore. Sint fugiat deserunt dolor
                    aute enim et cillum adipisicing cillum nostrud anim. Sit
                    dolore incididunt dolore do sunt pariatur consectetur id qui
                    pariatur eu incididunt adipisicing. Irure sint fugiat
                    officia veniam consectetur. Esse laborum amet aliqua ad in
                    sunt labore duis.
                  </small>
                </Description>
              ),
              image: "./images/card-4.png",
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
