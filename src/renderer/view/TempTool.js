export default class TempTool {
    temp = {
        form: {
            temp: `<el-form-item label="$0" prop="$1">
    <el-input v-model="form.$1"></el-input>
</el-form-item>`
        },
        option: {
            temp: '<el-option label="$0" value="$1"></el-option>',
            handle(row) {

            }
        }
    }

    /**
     * 按换行符拿到每行，并且去除空行
     * 按空格分割每行内字符串，并且去除空元素
     * 
     * @param {string} v 想要处理的字符串
     */
    handle(v) {
        return v.split('\n')
            .filter(el => !!el)
            .map(el => el.split(' ').filter(el => !!el))
    }

    replaceTemp(keys, tempopt) {
        let temp = tempopt.temp;
        keys.forEach((str, i) => {
            temp = temp.replace(new RegExp(`\\$${i}`, 'gim'), str);
        });
        temp = temp.replace(/\$[0-9]+/gim, '');
        return temp;
    }

    toTemp(tempName, arr) {

        let temp = this.temp[tempName];
        if (!temp) {
            console.warn(`[TempTool] 模板不存在:${tempName}`);
            return
        }
        return arr.map(el => this.replaceTemp(el, temp));
    }

    get(tempName, v, handle = (e) => e) {
        let row = this.toTemp(tempName, this.handle(v));
        row = handle(row);
        return row;

    }

}