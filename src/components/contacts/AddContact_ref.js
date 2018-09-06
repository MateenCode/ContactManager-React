

class AddContact extends Component {
  constructor(props) {
    super(props);



    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }



  onSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      Phone: this.PhoneInput.current.value
    }
  };


  static defaultProps = {
    name:'Fred Smith',
    email: 'fred@yahoo.com',
    phone: '777-777-7777'
  };



  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control form-control-lg" placeholder="Enter Name..." name="name" defualtvalue={name}  ref={this.nameInput}></input>
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="Email" className="form-control form-control-lg" placeholder="Enter Email..." name="email" defualtvalue={email}  ref={this.emailInpute}></input>
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input type="text" className="form-control form-control-lg" placeholder="Enter Phone..." name="phone" defualtvalue={phone} ref={this.phoneInput}>></input>
            </div>
            <input type='submit' value="Add Contact" className="btn btn-light btn-block"/>
          </form>
        </div>
      </div>
    );
  }
}
