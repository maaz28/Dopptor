import React, { Component } from 'react'
import img from '../img/logo.png'

export default class Invoice extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="card my-4 shadow">
            <div class="card-body">
              <div class="invoice p-6 p-sm-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="company">
                    <img class="company-logo img-responsive" src={img} style={{ maxWidth: "210px" }} alt="" />
                    <address class="mt-4">Dopptor Inc<br />(000) 123-4567</address>
                  </div>
                  <div class="title">
                    <h1 class="text-uppercase display-4">Invoice</h1>
                  </div>
                </div><br /><br />
                <div class="col-12">
                  <div class="row">
                    <div class="col-lg-8">
                      <p class="small accent">Invoice to</p>
                      <h5 class="user-name bold text-capitalize"></h5>
                      <address>1234 Street Name,<br />City, Your Country</address>
                    </div>
                    <div class="col-lg-4 d-flex align-items-end justify-content-between mb-3">
                      <div>
                        <div class="regular text-capitalize">invoice no:</div>
                        <div class="regular text-capitalize">invoice date:</div>
                        <div class="regular text-capitalize">Total due:</div>
                      </div>
                      <div>
                        <div>20160314</div>
                        <div>19/05/2018</div>
                        <div class="bold accent">$20,304.65</div>
                      </div>
                    </div>
                  </div>
                </div><br /><br /><br />
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="text-capitalize small bold color-2 border-top-0">Description</th>
                        <th class="text-center small bold color-2 border-top-0">Price</th>
                        <th class="text-center small bold color-2 border-top-0">Quantity</th>
                        <th class="text-right small bold color-2 border-top-0">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p class="bold text-capitalize mb-0">web design</p>
                          <p class="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cumque deleniti dicta ea explicabo.</p>
                        </td>
                        <td class="text-center">$678.00</td>
                        <td class="text-center">3</td>
                        <td class="text-right">$2,034.00</td>
                      </tr>
                      <tr>
                        <td>
                          <p class="bold text-capitalize mb-0">ionic app</p>
                          <p class="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum, dolorum ea eveniet incidunt ipsum laboriosam.</p>
                        </td>
                        <td class="text-center">$17,892.00</td>
                        <td class="text-center">1</td>
                        <td class="text-right">$17,892.00</td>
                      </tr>
                      <tr>
                        <td>
                          <p class="text-capitalize bold mb-0">marketing campaign</p>
                          <p class="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam architecto at deserunt dignissimos earum fugiat ipsa molestias neque odit pariatur, porro quas quos, repudiandae, rerum saepe vel velit.</p>
                        </td>
                        <td class="text-center">$1,234.00</td>
                        <td class="text-center">2</td>
                        <td class="text-right">$2,468.00</td>
                      </tr>
                      <tr>
                        <td>
                          <p class="text-capitalize bold mb-0">blog articles</p>
                          <p class="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci beatae debitis delectus earum enim exercitationem iusto laboriosam molestias.</p>
                        </td>
                        <td class="text-center">$485.00</td>
                        <td class="text-center">3</td>
                        <td class="text-right">$1,455.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row sub-total">
                  <div class="col-lg-6 ml-auto d-flex align-items-end justify-content-between">
                    <div>
                      <div class="text-uppercase color-2">subtotal</div>
                      <div class="text-uppercase color-2">discount -15%</div>
                    </div>
                    <div>
                      <div class="text-right">$23,849.00</div>
                      <div class="text-right">$-3,577.35</div>
                    </div>
                  </div>
                </div>
                <div class="row grand-total">
                  <div class="col-lg-6 ml-auto d-flex align-items-center justify-content-between">
                    <div class="text-uppercase regular color-2">subtotal</div>
                    <div class="text-right regular accent font-md">$20,304.65</div>
                  </div>
                </div>
                <div class="row align-items-end mt-9">
                  <div class="col-12 col-md-6 mr-auto">
                    <p class="font-md light color-2">Thank you<br />for your business.</p>
                  </div>
                  <div class="col-12 col-md-4 col-lg-3 ml-auto">
                    <div class="text-right">
                      <p class="signature">Jane Doe</p>
                      <hr />
                      <p class="bold mb-0">Jane Doe</p>
                      <p class="small color-2">Account Manager</p>
                    </div>
                  </div>
                </div>
                <hr class="mt-7" />
                <p class="regular mb-2">Terms and Conditions</p>
                <p class="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid aperiam asperiores delectus distinctio dolor, facilis hic impedit ipsum laudantium libero minima nam nesciunt numquam recusandae saepe similique sit vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque eaque eius eos explicabo quasi qui repudiandae, sequi sit vel. Accusantium aliquam ducimus, eligendi eos iure mollitia pariatur perferendis quo.</p>
                <p class="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam beatae consequuntur deserunt dicta dolores explicabo iure minima molestiae neque non, quam qui repellat repudiandae sapiente sequi sint, unde? Ipsam.</p>
                <hr class="mt-5" />
                <div>
                  <img src="img/logo.png" class="mr-3" style={{ maxWidth: "32px" }} alt="" />
                  <a href="https://www.dopptor.com" class="small">dopptor.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
