import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { changeCount } from '../redux/actions/counts';
import { bindActionCreators } from 'redux';



class ConnectApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() { 
        
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.count !== nextProps.count) {
            this.setState({ count: nextProps.count })
        }
    }

    decrementCount() {
        const { doChange } = this.props;
        const countNew = this.state.count - 1;
        doChange(countNew);
    }
    incrementCount = () => {
        const { doChange } = this.props;
        const countNew = this.state.count + 1;
        doChange(countNew);

    }
    render() {
        const { count } = this.state;

        return (
            <View styles={styles.container}>
                <Button
                    title="increment"
                    onPress={() => this.incrementCount()}
                />
                <Text>{count}</Text>
                <Button
                    title="decrement"
                    onPress={() => this.decrementCount()}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = state => ({
    count: state.count.count,
});

// const ActionCreators = Object.assign(
//     {},
//     changeCount,
// );
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(ActionCreators, dispatch),
// });

function mapDispatchToProps (dispatch) {
    return {
        doChange: (count) => {
            dispatch(changeCount(count))
        },
        dispatch,
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ConnectApp)
// export default App