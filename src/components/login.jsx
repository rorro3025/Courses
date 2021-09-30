import { useState } from "react"

function Login() {
    const [email, setEmail] = useState("")
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-5">
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" placeholder="example@exmaple.com" type="email" onChange={({ target }) => setEmail(target.value)} />
                        </div>
                        <input type="submit" className="btn btn-success" value="Sing up" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
