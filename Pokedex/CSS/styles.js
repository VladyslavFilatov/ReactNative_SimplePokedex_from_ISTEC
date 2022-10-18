import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  boxTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  textTitle: {
    color: '#000',
    fontSize: 48,
    fontWeight: 'bold',
  },

  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 30,
  },

  scrollItem: {
    flex: 1,
    //backgroundColor: 'pink',
    alignItems: 'center',
    //justifyContent: 'center',
    marginHorizontal: 50,
    borderRadius: 50,
  },

  itemImages: {
    height: 150,
    width: 150,
  },

  itemText: {
    alignItems: 'center',
    fontSize: 28,
    paddingBottom: 30,
  },
});

export default styles
