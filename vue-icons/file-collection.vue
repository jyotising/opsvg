
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M5 22H19C19.5523 22 20 21.5523 20 21V7L15.5 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M10.425 10.5C9.36185 10.5 8.5 11.5043 8.5 12.7432C8.5 14.9864 10.775 17.0256 12 17.5C13.225 17.0256 15.5 14.9864 15.5 12.7432C15.5 11.5043 14.6381 10.5 13.575 10.5C12.9239 10.5 12.3483 10.8767 12 11.4531C11.6517 10.8767 11.0761 10.5 10.425 10.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M15 2V7H20" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'file-collection',
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
  