import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7ea4b3',
        padding: 12,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 10,
    },
    learnMore: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    learnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default styles;