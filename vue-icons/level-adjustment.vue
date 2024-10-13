
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M3.94875 15L3.03809 18.3986L16.5611 22.0221L18.4426 15" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M5.55664 8.99964L7.43819 1.97754L20.9611 5.60099L20.0505 8.99964" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2 12H22" stroke="#333333" strokeDasharray="1 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'level-adjustment',
      props: {
        width: {
          type: String,
          default: '24px'
        },
        height: {
          type: String,
          default: '24px'
        }
      }
    };
    </script>
  