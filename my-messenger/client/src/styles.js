import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1500,
        },
    },
    bg__img: {
        position: 'absolute',
        height: '100vh',
        left: '0%',
        width: '37%',

        [theme.breakpoints.only('xs')]: {
            width: '100%',
            height: '55vh'
        },
        [theme.breakpoints.only('sm')]: {
            width: '48%',
        },
        [theme.breakpoints.only('md')]: {
            width: '45%',
        },
        [theme.breakpoints.only('lg')]: {
            width: '40%',
        }
    },
    bg__div: {
        position: 'absolute',
        width: '37%',
        height: '100vh',
        left: '0%',
        top: '0%',
        background: 'linear-gradient(180deg, #9D9D9D 0%, #86B9FF 100%)',
        mixBlendMode: 'normal',
        opacity: '0.85',
        zIndex: '1',

        [theme.breakpoints.only('xs')]: {
            width: '100%',
            height: '55vh'
        },
        [theme.breakpoints.only('sm')]: {
            width: '48%',
        },
        [theme.breakpoints.only('md')]: {
            width: '45%',
        },
        [theme.breakpoints.only('lg')]: {
            width: '40%',
        }
    },
    bg__svg: {
        position: 'absolute',
        left: '16%',
        top: '30%',
        zIndex: '1',

        [theme.breakpoints.only('xs')]: {
            top: '15%',
            left: '37%',
        },
        [theme.breakpoints.only('sm')]: {
            left: '18%',
        },
        [theme.breakpoints.only('md')]: {
            left: '19%',
        },
        [theme.breakpoints.only('lg')]: {
            left: '17%',
        }
    },
    svg__text: {
        position: 'absolute',
        left: '11%',
        top: '40%',
        textAlign: 'center',
        alignItems: 'center',
        maxWidth: '280px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '26px',
        lineHeight: '40px',
        zIndex: '1',
        color: '#FFFFFF',

        [theme.breakpoints.only('xs')]: {
            top: '27%',
            left: '14%',
        },
        [theme.breakpoints.only('sm')]: {
            left: '5%',
            top: '42%',
            fontSize: '22px',
        },
        [theme.breakpoints.only('md')]: {
            left: '9%',
        },
        [theme.breakpoints.only('lg')]: {
            left: '10%',
        }

    },
    form__details: {
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        height: '95vh',
        marginLeft: '114%',

        [theme.breakpoints.only('xs')]: {
            position: 'absolute',
            right: '26%',
            top: '17%',
        },
        [theme.breakpoints.only('sm')]: {
            position: 'absolute',
            right: '15%',
            top: '5%'
        },
        [theme.breakpoints.only('md')]: {
            position: 'absolute',
            right: '15%',
        },
        [theme.breakpoints.only('lg')]: {
            position: 'absolute',
            right: '17%',
        },
    },
    top__container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginLeft: '90%',
        paddingTop: '10px',
        alignItems: 'center',

        [theme.breakpoints.only('xs')]: {
            position: 'absolute',
            right: '0%',
            top: '55%',
        },
        [theme.breakpoints.only('sm')]: {
            width: '200px',
            marginLeft: '70%'
        },
    },
    top__container__btn: {
        width: '170px',
        boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
        borderRadius: '5px',
        color: '#3A8DFF',

        [theme.breakpoints.only('xs')]: {
            width: '120px'
        },
        [theme.breakpoints.only('sm')]: {
            width: '200px',
            marginLeft: '20px',
            marginTop: '5px'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '120px',
            marginLeft: '40px'
        },
    },
    login__message: {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '20px',

        [theme.breakpoints.only('xs')]: {
            visibility: 'hidden',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '22px'
        },
    },
    signup__message: {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '20px',

        [theme.breakpoints.only('xs')]: {
            visibility: 'hidden'
        },
        [theme.breakpoints.only('md')]: {
            fontSize: '32px'
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '18px'
        },
    },
    form__textField: {
        width: '520px',
        marginTop: '15px',

        [theme.breakpoints.only('xs')]: {
            width: '175px',
        },
        [theme.breakpoints.only('sm')]: {
            width: '180px',
        },
        [theme.breakpoints.only('md')]: {
            width: '320px'
        },
        [theme.breakpoints.only('lg')]: {
            width: '400px',
        },
    },
    form__create__btn: {
        background: '#3A8DFF',
        borderRadius: '3px',
        width: '160px',
        color: 'white',
        marginTop: '50%',

        [theme.breakpoints.only('xs')]: {
            marginTop: '45%',
            marginBottom: '10px'
        },
    },
    form__login__btn: {
        background: '#3A8DFF',
        borderRadius: '3px',
        width: '160px',
        color: 'white',
        marginTop: '50%',

        [theme.breakpoints.only('xs')]: {
            marginTop: '30%',
        },
    },
    btn__container: {
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
    },
    register__text: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '19px',
        textAlign: 'center',
        color: '#B0B0B0',
    },
    login__form__title: {
        color: '#B0B0B0',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '19px',

        [theme.breakpoints.only('xs')]: {
            visibility: 'hidden',
        },
    },
    signup__form__title: {
        color: '#B0B0B0',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '19px',
        marginTop: '20px',

        [theme.breakpoints.only('xs')]: {
            visibility: 'hidden',
        },
        [theme.breakpoints.only('sm')]: {
            visibility: 'hidden',
        },
    },
    form__signup__control: {

        [theme.breakpoints.only('xs')]: {
            height: '40px'
        },
        [theme.breakpoints.only('sm')]: {
            height: '70px'
        },

    },
    form__login__control: {

        [theme.breakpoints.only('xs')]: {
            height: '60px'
        },
    }
}
));