
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M19 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22H19C19.5523 22 20 21.5523 20 21V3C20 2.44771 19.5523 2 19 2Z" stroke="#333333" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'rectangle',
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
  