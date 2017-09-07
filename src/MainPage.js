import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addUrlProps, UrlQueryParamTypes, subquery } from 'react-url-query';
import { changeBaz } from './state/actions';

const customType = {
    decode: (encoded) => (encoded ? encoded.substring(6) : 'mystery'),
    encode: (decoded) => (decoded ? `custom${decoded}` : undefined)
};

const urlPropsQueryConfig = {
    arr: { type: UrlQueryParamTypes.array },
    bar: { type: UrlQueryParamTypes.string, validate: bar => bar && bar.length < 6 },
    foo: { type: UrlQueryParamTypes.number, queryParam: 'fooInUrl' },
    custom: { type: customType }
}

function mapStateToProps(state, props) {
    return {
        baz: state.baz,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeBaz(baz) {
            dispatch(changeBaz(baz));
        }
    }
}

class MainPage extends PureComponent {
    static propTypes = {
        arr: PropTypes.array,
        bar: PropTypes.string,
        baz: PropTypes.string,
        custom: PropTypes.string,
        foo: PropTypes.number,
        onChangeArr: PropTypes.func,
        onChangeBar: PropTypes.func,
        onChangeBaz: PropTypes.func,
        onChangeCustom: PropTypes.func,
        onChangeFoo: PropTypes.func,
        word: PropTypes.string,
    }

    static defaultProps = {
        arr: [],
        bar: 'bar',
        baz: 'baz',
        custom: 'custom',
        foo: 123
    }

    static contextTypes = {
        router: PropTypes.any
    }

    componentWillReceiveProps(nextProps) {
        const { arr } = this.props;
        if (arr !== nextProps.arr) {
            console.log('got new arr:', arr, '->', nextProps.arr);
        } else {
            console.log('arr did not change:', arr, '===', nextProps.arr);
        }
    }

    render() {
        const { arr, foo, bar, baz, custom, word, location, onChangeArr,
            onChangeBar, onChangeBaz, onChangeFoo, onChangeCustom } = this.props;

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>word</td>
                            <td>{word}</td>
                            <td>(url param)</td>
                            <td>
                                <Link to={{ pathname: `/${Math.random().toString(32).substring(8)}` }}>
                                    <button>Change word (reset query)</button>
                                </Link>
                                {' '}
                                <Link to={{ pathname: `/${Math.random().toString(32).substring(8)}`, query: location.query }}>
                                    <button>Change word (maintain query)</button>
                                </Link>
                                <Link to={{ pathname: `/${Math.random().toString(32).substring(8)}`, query: subquery(location.query, 'arr', 'bar') }}>
                                    <button>Change word (maintain partial query)</button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>arr</td>
                            <td>{JSON.stringify(arr)}</td>
                            <td>(url query param)</td>
                            <td>
                                <button onClick={() => onChangeArr([Math.round(Math.random() * 9), Math.round(Math.random() * 9)])}>
                                    Change arr
                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>foo</td>
                            <td>{foo}</td>
                            <td>(url query param)</td>
                            <td>
                                <button onClick={() => onChangeFoo(Math.round(Math.random() * 1000))}>
                                    Change foo
                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>bar</td>
                            <td>{bar}</td>
                            <td>(url query param)</td>
                            <td>
                                <button onClick={() => onChangeBar(Math.random().toString(32).substring(8))}>
                                    Change bar
                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>custom</td>
                            <td>{custom}</td>
                            <td>(url query param)</td>
                            <td>
                                <button onClick={() => onChangeCustom(Math.random().toString(32).substring(9))}>
                                    Change custom
                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>baz</td>
                            <td>{baz}</td>
                            <td>(redux state)</td>
                            <td>
                                <button onClick={() => onChangeBaz(Math.random().toString(32).substring(10))}>
                                    Change baz
                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default addUrlProps({ urlPropsQueryConfig })(connect(mapStateToProps, mapDispatchToProps)(MainPage));
