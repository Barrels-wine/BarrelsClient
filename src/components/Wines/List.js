// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import ReactDataGrid from 'react-data-grid';
import { FormattedMessage } from 'react-intl';

import { ContentWrapper } from '../Layout';
import { Loading } from '../Common';
import AddButton from './AddButton';
import { getWines } from '../../actions/cellar';
import headers from './headers';

const GRID_MIN_HEIGHT = 700;

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: headers.map(rawHeader => {
                const header = {...rawHeader};
                header.name = (<FormattedMessage   
                    id={`wines.fields.${header.name}`}
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
                <AddButton />
                {loading && <Loading />}
                {!!Object.keys(wines).length && <Container fluid>
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
