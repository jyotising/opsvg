
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 22C12 22 20 16 20 9.5C20 5.35785 16.4183 2 12 2C7.5817 2 4 5.35785 4 9.5C4 16 12 22 12 22Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M10.5 7V15" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M10.5 7H13.5C14.6046 7 15.5 7.89545 15.5 9C15.5 10.1046 14.6046 11 13.5 11H10.5V7Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'parking',
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
  