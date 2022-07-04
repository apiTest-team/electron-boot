import { ObjectDefinitionInterface } from "./objectDefinition.interface";
import { AutowiredContainerInterface } from "./containerInterface";


/**
 * 参数生命周期回调参数
 */
interface ObjectLifeCycleOptions {
  context: AutowiredContainerInterface;
  definition: ObjectDefinitionInterface;
}

/**
 * 对象创建前的回调参数
 */
export interface ObjectBeforeCreatedOptions extends ObjectLifeCycleOptions {
  constructorArgs: any[];
}

/**
 * 对象绑定前的回调参数
 */
export interface ObjectBeforeBindOptions extends ObjectLifeCycleOptions {
  replaceCallback: (newDefinition: ObjectDefinitionInterface) => void;
}

/**
 * 对象创建后的回调参数
 */
export interface ObjectCreatedOptions<T> extends ObjectLifeCycleOptions {
  replaceCallback: (ins: T) => void;
}

/**
 * 对象初始化时回调参数
 */
export type ObjectInitOptions = ObjectLifeCycleOptions

/**
 * 对象被销毁前回调的参数
 */
export type ObjectBeforeDestroyOptions = ObjectLifeCycleOptions

/**
 * Lifecycle Definition
 * 生命周期定义
 */
export interface LifeCycleInterface extends Partial<ObjectLifeCycleInterface> {
  onConfigLoad?(
    container: AutowiredContainerInterface
  ): Promise<any>;
  onReady?(
    container: AutowiredContainerInterface
  ): Promise<void>;
  onServerReady?(
    container: AutowiredContainerInterface
  ): Promise<void>;
  onStop?(
    container: AutowiredContainerInterface
  ): Promise<void>;
}
/**
 * 定义对象的生命周期
 */
export interface ObjectLifeCycleInterface {
  onBeforeBind(fn: (clazz: any, options: ObjectBeforeBindOptions) => void);
  onBeforeObjectCreated(
    fn: (clazz: any, options: ObjectBeforeCreatedOptions) => void
  );
  onObjectCreated<T>(fn: (ins: T, options: ObjectCreatedOptions<T>) => void);
  onObjectInit<T>(fn: (ins: T, options: ObjectInitOptions) => void);
  onBeforeObjectDestroy<T>(
    fn: (ins: T, options: ObjectBeforeDestroyOptions) => void
  );
}