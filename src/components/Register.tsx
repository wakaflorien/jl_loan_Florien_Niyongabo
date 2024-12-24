import { FC, useCallback, useState } from "react";
import { UserInterface } from "../App.types";

const Register: FC = ({ handleShowRegister }) => {
    const [formData, setFormData] = useState<UserInterface>({
            firstname: '',
            lastname: '',
            phone: '',
            password: '',
            userType: 'user',
            isLoggedIn: false,
            loanStatus: 'none',
            loanAmount: 0
        })
    
        const handleRegister = async () => {
            console.log(formData, " Registering in...")
            localStorage.setItem('registeredUser', JSON.stringify(formData))

            await handleShowRegister()
        }

    return (
        <section className="h-full flex items-center justify-center">
            <div className="flex flex-col gap-4 px-20 py-12 border border-teal-900 rounded-md w-[500px]">
                <h1 className="text-center text-lg lg:text-xl text-teal-900">Register Here!</h1>
                <form className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="lastname" className="space-y-1">
                            <span className="font-semibold text-teal-900">Lastname</span>
                            <input type="text" id="lastname" className="form-input" onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
                        </label>
                        <label htmlFor="firstname" className="space-y-1">
                            <span className="font-semibold text-teal-900">Firstname</span>
                            <input type="text" id="firstname" className="form-input" onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
                        </label>
                        <label htmlFor="phoneR" className="space-y-1">
                            <span className="font-semibold text-teal-900">Phone</span>
                            <input type="text" id="phoneR" className="form-input" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                        </label>
                        <label htmlFor="passwordR" className="space-y-1">
                            <span className="font-semibold text-teal-900">Password</span>
                            <input type="text" id="passwordR" className="form-input" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                        </label>
                    </div>
                    <button type="submit" name="login" className="form-button" onClick={handleRegister}>Register</button>
                </form>
                <p className="text-center text-teal-900">Already have an account? <a href="#" className="text-teal-900">Login</a></p>
            </div>
        </section>
    )
}

export default Register