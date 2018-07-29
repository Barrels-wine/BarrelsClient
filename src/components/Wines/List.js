// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import ReactDataGrid from 'react-data-grid';
import { FormattedMessage } from 'react-intl';

import { ContentWrapper } from '../Layout';
import Loading from '../Loading';
import { getWines } from '../../actions/cellar';

const GRID_MIN_HEIGHT = 700;

const HEADERS = [
    {
        key: 'name',
        name: 'name',
    },
    {
        key: 'bottles',
        name: 'nb_bottles',
        formatter: ({value}) => value.length,
    },
    {
        key: 'batch',
        name: 'batch',
    },
    {
        key: 'vintage',
        name: 'vintage',
    },
    {
        key: 'classificationLevel',
        name: 'classification_level',
    },
    {
        key: 'designation',
        name: 'designation',
    },
    {
        key: 'region',
        name: 'region',
    },
    {
        key: 'country',
        name: 'country',
    }
];

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: HEADERS.map(rawHeader => {
                const header = {...rawHeader};
                header.name = (<FormattedMessage   
                    id={`wines.list.headers.${header.name}`}
                />);

                return header;
            })
        }
    }

    componentWillMount() {
        const { fetchWines, wines } = this.props;

        if (!Object.keys(wines).length) {
            fetchWines();
        }
    }

    sort = (sortColumn, sortDirection) => {

    }

    render() {
        const { wines, loading } = this.props;

        return (
            <ContentWrapper
                title="wines.list.title"
            >
                {loading && <Loading />}
                {Object.keys(wines).length && <Container fluid>
                    <ReactDataGrid
                        onGridSort={this.sort}
                        columns={this.state.headers}
                        rowGetter={(i) => wines[Object.keys(wines)[i]]}
                        rowsCount={Object.keys(wines).length}
                        minHeight={GRID_MIN_HEIGHT} />
                </Container>}

            </ContentWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wines: state.cellar.wines,
        loading: state.cellar.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWines: () => dispatch(getWines()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
