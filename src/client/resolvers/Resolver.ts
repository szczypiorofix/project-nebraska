
abstract class Resolver<T> {
  protected abstract resolve(): Promise<T>;
}

export default Resolver;