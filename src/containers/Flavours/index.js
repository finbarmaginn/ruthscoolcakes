import React from 'react'
require("./style.scss")
class Flavours extends React.Component {
  render() {
    return (<section className="wrapper" id="flavours">
      <article>
        <h1>Suggested Flavours</h1>
        <ul className="standard-list">
          <li>
            Mixed fruit
          </li>
          <li>
            Vanilla
          </li>

          <li>Chocolate</li>

          <li>Chocolate orange</li>

          <li>Lemon</li>

          <li>Lemon & Lime</li>

          <li>Red Velvet</li>

          <li>Coffee</li>

          <li>Pistachio</li>

        </ul>
        <p>If you are having a tiered cake, the tiers can be different flavours.</p>

        <h2>
          Wedding Cakes
        </h2>

        <p>From first call to setting up on the big day I will work closely with you to create a cake that will be both stunning and delicious.</p>

        <p>Wedding cakes can be traditionally tiered or more unusual. If you want the traditional look of a tiered cake, some of the tiers can be cosmetic. This will help to keep your costs down!</p>

        <p>Delivery within the Wakefield Five Towns area will be free of charge. We will deliver to surrounding areas subject to an additional charge.</p>
        <h2>Pricing</h2>

        <p>As our cakes are made individually to suit your exact requirements this means that prices can vary considerably. Once I have the details of the size and style of cake you require I will be able to provide you with an exact quotation.</p>

        <p>As a guide, based on an eight inch sponge:-</p>
        <table>
          <tbody>
            <tr>
              <td>Tiered cake</td>
              <td>
                <span className="from">from {""}</span>
                £100
              </td>
            </tr>
            <tr>
              <td>Celebration cake</td>
              <td>
                <span className="from">from {""}</span>
                £30
              </td>
            </tr>
            <tr>
              <td>Novelty cake</td>
              <td>
                <span className="from">from {""}</span>
                £50
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>)
  }
}

export default Flavours
