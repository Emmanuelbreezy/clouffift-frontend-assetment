import React from "react";
import { OnboardForm } from "../../components/OnboardUI/onboard-form";
import AuthLayout from "../../hoc/auth-layout";

type OnboardProps = {}

const Onboard = (props:OnboardProps) => {
    return(
        <AuthLayout>
            <OnboardForm />
        </AuthLayout>
    );
}


export default Onboard;

