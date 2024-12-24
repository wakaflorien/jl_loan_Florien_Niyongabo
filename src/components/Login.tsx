import { FC, useCallback, useState } from "react";
import { LoginInterface, showForm } from "../App.types";

const Login: FC = ({handleShowRegister}) => {
    const [formData, setFormData] = useState<LoginInterface>({
        password: '',
        phone: '',
        userType: 'user'
    })

    const handleLogin = () => {
        console.log(formData, " Logging in...")
        localStorage.setItem('loggedUser', JSON.stringify(formData))
    }

    return (
        <section className="h-full flex items-center justify-center">
            <div className="flex flex-col gap-4 px-20 py-12 border border-teal-900 rounded-md w-[500px]">
                <h1 className="text-center text-lg lg:text-xl font-semibold text-teal-900">Login Here!</h1>
                <form className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="phone" className="space-y-1">
                            <span className="font-semibold text-teal-900">Phone</span>
                            <input type="text" id="phone" className="form-input" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                        </label>
                        <label htmlFor="password" className="space-y-1">
                            <span className="font-semibold text-teal-900">Password</span>
                            <input type="password" id="password" className="form-input" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                        </label>
                    </div>
                    <button type="submit" name="login" className="form-button" onClick={handleLogin}>Login</button>
                </form>
                <p className="text-center text-xs lg:text-md text-teal-900">Don't have an account? <button onClick={handleShowRegister} className="text-teal-900">Register</button></p>
            </div>
        </section>
    )
}

export default Login