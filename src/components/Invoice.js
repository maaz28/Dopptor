import React, { Component } from 'react'
import img from '../img/logo.png'

export default class Invoice extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="card my-4 shadow">
            <div className="card-body">
              <div className="invoice p-6 p-sm-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="company">
                    <img className="company-logo img-responsive" src={img} style={{ maxWidth: "210px" }} alt="" />
                    <address className="mt-4">Dopptor Inc<br />(000) 123-4567</address>
                  </div>
                  <div className="title">
                    <h1 className="text-uppercase display-4">Invoice</h1>
                  </div>
                </div><br /><br />
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-8">
                      <p className="small accent">Invoice to</p>
                      <h5 className="user-name bold text-capitalize"></h5>
                      <address>1234 Street Name,<br />City, Your Country</address>
                    </div>
                    <div className="col-lg-4 d-flex align-items-end justify-content-between mb-3">
                      <div>
                        <div className="regular text-capitalize">invoice no:</div>
                        <div className="regular text-capitalize">invoice date:</div>
                        <div className="regular text-capitalize">Total due:</div>
                      </div>
                      <div>
                        <div>20160314</div>
                        <div>19/05/2018</div>
                        <div className="bold accent">$20,304.65</div>
                      </div>
                    </div>
                  </div>
                </div><br /><br /><br />
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-capitalize small bold color-2 border-top-0">Description</th>
                        <th className="text-center small bold color-2 border-top-0">Price</th>
                        <th className="text-center small bold color-2 border-top-0">Quantity</th>
                        <th className="text-right small bold color-2 border-top-0">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className="bold text-capitalize mb-0">web design</p>
                          <p className="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cumque deleniti dicta ea explicabo.</p>
                        </td>
                        <td className="text-center">$678.00</td>
                        <td className="text-center">3</td>
                        <td className="text-right">$2,034.00</td>
                      </tr>
                      <tr>
                        <td>
                          <p className="bold text-capitalize mb-0">ionic app</p>
                          <p className="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum, dolorum ea eveniet incidunt ipsum laboriosam.</p>
                        </td>
                        <td className="text-center">$17,892.00</td>
                        <td className="text-center">1</td>
                        <td className="text-right">$17,892.00</td>
                      </tr>
                      <tr>
                        <td>
                          <p className="text-capitalize bold mb-0">marketing campaign</p>
                          <p className="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam architecto at deserunt dignissimos earum fugiat ipsa molestias neque odit pariatur, porro quas quos, repudiandae, rerum saepe vel velit.</p>
                        </td>
                        <td className="text-center">$1,234.00</td>
                        <td className="text-center">2</td>
                        <td className="text-right">$2,468.00</td>
                      </tr>
                      <tr>
                        <td>
                          <p className="text-capitalize bold mb-0">blog articles</p>
                          <p className="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci beatae debitis delectus earum enim exercitationem iusto laboriosam molestias.</p>
                        </td>
                        <td className="text-center">$485.00</td>
                        <td className="text-center">3</td>
                        <td className="text-right">$1,455.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row sub-total">
                  <div className="col-lg-6 ml-auto d-flex align-items-end justify-content-between">
                    <div>
                      <div className="text-uppercase color-2">subtotal</div>
                      <div className="text-uppercase color-2">discount -15%</div>
                    </div>
                    <div>
                      <div className="text-right">$23,849.00</div>
                      <div className="text-right">$-3,577.35</div>
                    </div>
                  </div>
                </div>
                <div className="row grand-total">
                  <div className="col-lg-6 ml-auto d-flex align-items-center justify-content-between">
                    <div className="text-uppercase regular color-2">subtotal</div>
                    <div className="text-right regular accent font-md">$20,304.65</div>
                  </div>
                </div>
                <div className="row align-items-end mt-9">
                  <div className="col-12 col-md-6 mr-auto">
                    <p className="font-md light color-2">Thank you<br />for your business.</p>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 ml-auto">
                    <div className="text-right">
                      <p className="signature">Jane Doe</p>
                      <hr />
                      <p className="bold mb-0">Jane Doe</p>
                      <p className="small color-2">Account Manager</p>
                    </div>
                  </div>
                </div>
                <hr className="mt-7" />
                <p className="regular mb-2">Terms and Conditions</p>
                <p className="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid aperiam asperiores delectus distinctio dolor, facilis hic impedit ipsum laudantium libero minima nam nesciunt numquam recusandae saepe similique sit vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque eaque eius eos explicabo quasi qui repudiandae, sequi sit vel. Accusantium aliquam ducimus, eligendi eos iure mollitia pariatur perferendis quo.</p>
                <p className="small color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam beatae consequuntur deserunt dicta dolores explicabo iure minima molestiae neque non, quam qui repellat repudiandae sapiente sequi sint, unde? Ipsam.</p>
                <hr className="mt-5" />
                <div>
                  <img src="img/logo.png" className="mr-3" style={{ maxWidth: "32px" }} alt="" />
                  <a href="https://www.dopptor.com" className="small">dopptor.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
