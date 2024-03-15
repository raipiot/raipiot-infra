import { useBaseModalContext } from '../context'
import { useSubmitMutation } from '../mutations'
import type { SubmitFormModal } from '../types'

export function BaseModal() {
  const { modal, form, formItems } = useBaseModalContext()

  // 异步提交
  const { mutateAsync, isPending } = useSubmitMutation()

  return (
    <RpModal
      // 模态框类型
      type={modal.type}
      // 打开状态
      open={modal.open}
      // 标题
      title={modal.getTitle()}
      // 确认按钮加载
      confirmLoading={isPending}
      // 事件：确认
      onOk={form.submit}
      // 事件：取消
      onCancel={modal.close}
      // 底部区域
      footer={modal.isRead ? null : undefined}
    >
      <RpDynamicForm<SubmitFormModal>
        name="modal"
        // 表单
        form={form}
        // 表单配置项
        items={formItems}
        // 表单模式
        mode={modal.type}
        // 表单初始值
        initialValues={{}}
        // 表单提交
        onFinish={async () => {
          const values = form.getFieldsValue(true)
          await mutateAsync(values, { onSuccess: modal.close })
        }}
      />
    </RpModal>
  )
}
