import useAxios from 'axios-hooks';

const useAuthentication = () => {
    const [loginResponse, executeLogin] = useAxios(
        {
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/py/auth/token`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        },
        { manual: true }
    );

    const [registerResponse, executeRegister] = useAxios(
        {
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/py/auth`,
            headers: { 'Content-Type': 'application/json' }
        },
        { manual: true }
    );
    
    return {
        login: {
            submit: (params) => {
                const formData = new FormData();
                Object.entries(params).forEach(([key, value]) => {
                    formData.append(key, value);
                });
                return executeLogin({
                    method: 'POST',
                    data: formData
                });
            },
            error: loginResponse.error,
            loading: loginResponse.loading,
            data: loginResponse.data
        },
        register: {
            submit: (params) => executeRegister({
                method: 'POST',
                data: {
                    ...params
                }
            }),
            error: registerResponse.error,
            loading: registerResponse.loading,
            data: registerResponse.data
        }
    }
}

export default useAuthentication;