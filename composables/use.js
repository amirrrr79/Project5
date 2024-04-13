export const use = () => {
    const User = useState('user', () => null);

    return { User }
}