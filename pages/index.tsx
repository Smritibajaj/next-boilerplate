import Link from 'next/link'
import Layout from '../components/Layout'
import {connect} from "react-redux";
import * as React from "react";
import {IStoreState} from "../interfaces";
import {getTickState} from "../selectors";
import {updateTick} from "../actions";
import wrapper , {thunkAsyncFunction} from "../store";
import ITickState from "../interfaces";

interface IProps {
    tick: ITickState
    updateAnnouncement: any
}

interface IState {}

interface IDispatchProps {
    onUpdateTick: (message: string) => ITickState,
    thunkAsyncFunction: () => Promise<any>;
}

type Props = IProps & IState & IDispatchProps

class App extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    async componentWillUnmount(): Promise<void> {
        await this.props.thunkAsyncFunction();
    }

    render() {
        return (
            <Layout title="Home | Next.js + TypeScript Example">
                <div className='w-screen h-screen'>
                <h1 className='text-red-100'>Hello Next.js 👋</h1>
                <p>
                    <Link href="/about" className='text-blue-500'>
                        <a className='text-blue-500'>About</a>
                    </Link>
                </p>
                <div>
                    The current tick state: {this.props.tick.message}
                </div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = (state: IStoreState): {tick: ITickState} => ({
    tick: getTickState(state)
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => {
    return {
        onUpdateTick: (message: string) =>
            dispatch(updateTick()),
        thunkAsyncFunction: () => dispatch(thunkAsyncFunction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// As the wrapper is injected in _app.tsx, for every component(page) that will interact with Redux and Thunk
// you need to place this piece of code bellow, that will get the static props from the wrapper, and inject on your
// component
//@ts-ignore
export const getStaticProps = wrapper.getStaticProps(({}) => {})