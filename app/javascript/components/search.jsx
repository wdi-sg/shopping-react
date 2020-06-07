import React from 'react';
import SearchInput from './search/searchinput';
import SearchResult from './search/searchresult';
import Divider from '@material-ui/core/Divider';

class Search extends React.Component {

  liftInput(v){
    this.refs.putInputvalue.putInputValue(v);
  }

  liftClickResult(v){
    this.props.liftClickResult(v)
  }


  render() {
    return (
      <div>
        <div>
          <h2 className='border-b' style={{textAlign:'center'}}>Search field</h2>
        </div>
        <div>
        <SearchInput
          searchInput={(v) => {this.liftInput(v)}}
        />
        </div>
        <div>
        <br/>
        <SearchResult
          ref='putInputvalue'
          liftClickResult={(v) => {this.liftClickResult(v)}}
        />
        </div>
      </div>
    );
  }
}
export default Search;